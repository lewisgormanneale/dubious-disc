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
  selector: 'dd-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
})
export class PokemonStatsComponent implements OnChanges, OnDestroy {
  @Input() pokemonId: number = 0;
  stats: any = [] as any;
  total: number = 0;

  private supabase: SupabaseService = inject(SupabaseService);
  private destroy$ = new Subject<void>();

  ngOnChanges() {
    this.supabase
      .getPokemonStatsByPokemonId(this.pokemonId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.stats = data;
        this.total = data.reduce(
          (total: number, stat: any) => total + stat.base_stat,
          0
        );
      });
  }

  getProgressBarClass(stat: number) {
    if (stat >= 90) {
      return 'bg-good_stat';
    } else if (stat >= 60) {
      return 'bg-medium_stat';
    } else {
      return 'bg-bad_stat';
    }
  }

  getProgressBarStyle(base_stat: number) {
    return { width: (base_stat / 255) * 100 + '%' };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
