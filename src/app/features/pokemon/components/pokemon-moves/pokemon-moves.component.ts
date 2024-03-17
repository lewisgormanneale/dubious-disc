import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
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

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges() {
    if (this.pokemonId === 0 || this.versionGroupId === 0) return;
    this.supabase
      .getPokemonMovesByPokemonId(this.pokemonId, this.versionGroupId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
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
        this.activeTab = this.tabs[0];
      });
  }

  selectMoveGroup(tab: Tab) {
    this.activeTab = tab;
    this.selectedMoveGroup = this.moveGroups.find(
      (group: any) =>
        group[0].pokemon_move_method_id.identifier === tab.identifier
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
