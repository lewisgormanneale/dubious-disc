import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
})
export class PokemonFormsComponent implements OnInit {
  @Input() pokemon_forms: any;
  @Input() selected_form: any;

  @Output() selectedForm: any;

  private supabase: SupabaseService = inject(SupabaseService);

  ngOnInit(): void {
    console.log(this.pokemon_forms);
  }

  getFormImage(id: any) {
    return this.supabase.storage
      .from('pokemon')
      .getPublicUrl('home-previews/' + id + '.png').data.publicUrl;
  }

  selectForm(form: any) {
    this.selected_form = form;
  }
}
