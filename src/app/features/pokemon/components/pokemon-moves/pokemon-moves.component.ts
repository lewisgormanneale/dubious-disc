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
  selector: 'app-pokemon-moves',
  templateUrl: './pokemon-moves.component.html',
})
export class PokemonMovesComponent implements OnChanges, OnDestroy {
  @Input() pokemonId: number = 0;
  @Input() versionGroupId: number = 0;
  moves: any = [] as any;

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges() {
    if (this.pokemonId === 0 || this.versionGroupId === 0) return;
    this.supabase
      .getPokemonMovesByPokemonId(this.pokemonId, this.versionGroupId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.moves = data;
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
