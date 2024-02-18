import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
})
export class PokemonMovesComponent implements OnChanges, OnDestroy {
  @Input() pokemonId: number = 0;
  @Input() versionGroupId: number = 0;

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
        this.selectedMoveGroup = this.moveGroups[0];
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
