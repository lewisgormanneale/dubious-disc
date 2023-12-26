import { Component, inject, Input, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
  @Input() pokemon_id: number = 0;
  stats: any = [] as any;

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    this.supabase
      .getPokemonStatsByPokemonId(this.pokemon_id)
      .subscribe((data) => {
        this.stats = data;
      });
  }

  getProgressBarClass(id: number) {
    switch (id) {
      case 1:
        return 'bg-hp';
      case 2:
        return 'bg-attack';
      case 3:
        return 'bg-defense';
      case 4:
        return 'bg-special-attack';
      case 5:
        return 'bg-special-defense';
      case 6:
        return 'bg-speed';
      default:
        return 'bg-zinc-300';
    }
  }

  getProgressBarStyle(base_stat: number) {
    return { width: (base_stat / 255) * 100 + '%' };
  }
}
