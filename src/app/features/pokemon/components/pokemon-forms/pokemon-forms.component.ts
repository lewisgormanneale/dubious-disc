import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SupabaseService } from 'src/app/core/services/supabase.service';

@Component({
  selector: 'app-pokemon-forms',
  templateUrl: './pokemon-forms.component.html',
})
export class PokemonFormsComponent {
  @Input() pokemonForms: any;
  @Input() selectedForm: any;

  @Output() newSelectedForm = new EventEmitter<any>();

  customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    slideBy: 'page',
    nav: true,
    margin: 10,
    navSpeed: 100,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 2,
      },
      320: {
        items: 4,
      },
      400: {
        items: 5,
      },
      740: {
        items: 6,
      },
      940: {
        items: 8,
      },
    },
  };

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
