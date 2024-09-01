import { Component, inject, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Tab } from 'src/app/core/models';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
})
export class PokemonMovesComponent implements OnChanges, OnDestroy {
  @Input() pokemonId: number = 0;
  @Input() versionGroupId: number = 0;

  tabs: Tab[] = [] as any;
  activeTab: Tab = {} as Tab;

  moveGroups: any = [] as any;
  selectedMoveGroup: any = [] as any;

  columns: any = [] as any;
  data: any = [] as any;

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges() {
    if (this.pokemonId === 0 || this.versionGroupId === 0) return;
    this.supabase
      .getPokemonMovesByPokemonId(this.pokemonId, this.versionGroupId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (!data.length) {
          this.tabs = [];
          this.columns = [];
          this.data = [];
          return;
        }
        this.moveGroups = Object.values(
          data.reduce((acc: any, move: any) => {
            const key = move.pokemon_move_method_id.id;
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(move);
            return acc;
          }, {})
        );
        this.tabs = this.moveGroups.map((group: any) => ({
          name: group[0].pokemon_move_method_id.name,
          identifier: group[0].pokemon_move_method_id.identifier,
        }));
        this.selectedMoveGroup = this.moveGroups[0];
        this.columns = [
          { label: 'Level', property: 'level' },
          { label: 'Move', property: 'move_name' },
          { label: 'Type', property: 'type_id' },
          { label: 'Power', property: 'power' },
          { label: 'Accuracy', property: 'accuracy' },
        ];
        this.data = this.selectedMoveGroup.map((move: any) => ({
          level: this.moveLevel(move),
          move_name: move.move_id.name,
          type_id: move.move_id.type_id,
          power: move.move_id.power,
          accuracy: move.move_id.accuracy,
        }));
        this.activeTab = this.tabs[0];
      });
  }

  selectMoveGroup(tab: Tab) {
    this.activeTab = tab;
    this.columns = [
      { label: 'Level', property: 'level' },
      { label: 'Move', property: 'move_name' },
      { label: 'Type', property: 'type_id' },
      { label: 'Power', property: 'power' },
      { label: 'Accuracy', property: 'accuracy' },
    ];
    this.selectedMoveGroup = this.moveGroups.find(
      (group: any) =>
        group[0].pokemon_move_method_id.identifier === tab.identifier
    );
    this.data = this.selectedMoveGroup.map((move: any) => ({
      level: this.moveLevel(move),
      move_name: move.move_id.name,
      type_id: move.move_id.type_id,
      power: move.move_id.power,
      accuracy: move.move_id.accuracy,
    }));
  }

  moveLevel(move: any) {
    if (move.move_pokemon_move_method_id === 1 && move.level === 0) {
      return 'evolve';
    }
    if (move.move_pokemon_move_method_id === 1 && move.level === 1) {
      return '—';
    }
    return move.level;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
