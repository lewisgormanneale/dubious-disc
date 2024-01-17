import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
})
export class PokemonFormsComponent {
  @Input() pokemonForms: any;
  @Input() selectedForm: any;

  @Output() newSelectedForm = new EventEmitter<any>();

  private supabase: SupabaseService = inject(SupabaseService);

  getFormImage(id: any) {
    return this.supabase.storage
      .from('pokemon')
      .getPublicUrl('home-icons/' + id + '.png').data.publicUrl;
  }

  selectForm(form: any) {
    if (form.id === this.selectedForm.id) {
      return;
    } else {
      this.newSelectedForm.emit(form);
    }
  }
}
