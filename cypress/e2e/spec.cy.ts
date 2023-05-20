describe('Application Navigation', () => {
  it('Root URL redirects to National Pokédex', () => {
    cy.visit('/');
    cy.url().should('include', '/pokedex/1');
    cy.contains('span', 'Angular Pokédex');
    cy.get(':nth-child(1) > .text-dark > .card-body > .card-title').should(
      'have.text',
      ' Bulbasaur '
    );
  });

  it('Can Navigate to Different Pokédex Pages', () => {
    cy.visit('/');
    cy.url().should('include', '/pokedex/1');
    cy.get(':nth-child(5) > .page-link').click();
    cy.get(':nth-child(1) > .text-dark > .card-body > .card-title').should(
      'have.text',
      ' Mew '
    );
  });

  it('Selecting Pokédex List Item Navigates To Correct Pokemon', () => {
    cy.visit('/');
    cy.url().should('include', '/pokedex/1');
    cy.get('.pokedex-list > .pokedex-list-item')
      .eq(3)
      .should('include.text', ' Charmander ');
    cy.get('.pokedex-list > .pokedex-list-item').eq(5).click();
    cy.url().should('include', '/pokemon/6');
    cy.get('.card-title > .white-outlined').should('have.text', ' Charizard');
    cy.get(':nth-child(1) > .type-box > .fw-bold').should('have.text', 'Fire');
    cy.get(':nth-child(2) > .type-box > .fw-bold').should(
      'have.text',
      'Flying'
    );
    cy.get('.h-100').should(
      'have.attr',
      'style',
      'background: linear-gradient(to right bottom, rgb(202, 43, 14), rgb(136, 153, 255));'
    );
    cy.get('app-gender-ratio > .progress > .progress-bar').should(
      'have.attr',
      'style',
      'width: 87.5%;'
    );
    cy.get('.w-100 > .list-group > :nth-child(1)').should(
      'have.text',
      'Classification: Flame Pokémon '
    );
    cy.get('.w-100 > .list-group > :nth-child(2)').should(
      'have.text',
      'Height: 5\'07" '
    );
    cy.get('.w-100 > .list-group > :nth-child(3)').should(
      'have.text',
      'Weight: 199.5 lbs '
    );
  });
  it('Can Navigate to Different Pokédexes Through Navbar Dropdown', () => {
    cy.visit('/');
    cy.viewport(1280, 800);
    cy.get('#navbarDropdown').click();
    cy.get('[href="pokedex/30"]').click();
    cy.url().should('include', '/pokedex/30?page=1');
    cy.get('.pokedex-list > .pokedex-list-item')
      .eq(0)
      .should('include.text', ' Rowlet ');
  });
});
