import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'dd-games',
  templateUrl: './games.component.html',
})
export class GamesComponent {
  public urlValue: string = '';
  public versionGroup: any;

  private supabase: SupabaseService = inject(SupabaseService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.urlValue = params.get('slug') || '';
          return this.supabase.getVersionGroupByIdentifier(this.urlValue);
        })
      )
      .subscribe((data: any) => {
        this.versionGroup = data;
      });
  }
}
