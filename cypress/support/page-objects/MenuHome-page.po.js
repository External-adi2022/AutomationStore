
class menuHome {

    VisitHomePage() {
        cy.visit('/');
        cy.title().should('contain', 'nopCommerce demo store')
    }

    //Computer Top Menu
    computerMenuId() {
        return cy.get('.top-menu >li').should('exist').eq(0).trigger('mouseover', { force: true })

    }
    computerMenu() {
        this.computerMenuId().children('a').should('exist').as('compMenu')
            .should('have.text', 'Computers ')
            .and('have.attr', 'href')
            .and('include', '/computers');

        this.computerMenuId().children('div').should('exist')
            .and('have.class', 'sublist-toggle');

        cy.get('@compMenu').then((el) => {
            expect(el).to.have.css("color", "rgb(85, 85, 85)");
        })

        this.computerMenuId().find('ul').find('li>a').should('have.length', '3');

        cy.get('@compMenu').click({ force: true }).then(() => {
            cy.url().should('include', '/computers');
            cy.title().should('include', 'nopCommerce demo store. Computers');
        })
    }

    Computer_DesktopsSubMenu() {
        this.computerMenuId().find('.first-level >li >a').should('exist').eq(0).as('desktopMenu')
            .should('have.text', 'Desktops ')
            .and('have.attr', 'href')
            .and('include', '/desktops');

        cy.get('@desktopMenu').click({ force: true }).then(() => {
            cy.url().should('include', '/desktops');
            cy.title().should('include', 'nopCommerce demo store. Desktops');
        })
    }

    Computer_NotebooksSubMenu() {
        this.computerMenuId().find('.first-level >li >a').should('exist').eq(1).as('Notebooks')
            .should('have.text', 'Notebooks ')
            .and('have.attr', 'href')
            .and('include', '/notebooks');

        cy.get('@Notebooks').click({ force: true }).then(() => {
            cy.url().should('include', '/notebooks');
            cy.title().should('include', 'nopCommerce demo store. Notebooks');
        })
    }

    Computer_SoftwareSubMenu() {
        this.computerMenuId().find('.first-level >li >a').should('exist').eq(2).as('Software')
            .should('have.text', 'Software ')
            .and('have.attr', 'href')
            .and('include', '/software');

        cy.get('@Software').click({ force: true }).then(() => {
            cy.url().should('include', '/software');
            cy.title().should('include', 'nopCommerce demo store. Software');
        })
    }

    ElectronicsId() {
        return cy.get('.top-menu >li').eq(1).should('exist').trigger('mouseover', { force: true })
    }

    ElectronicsMenu() {
        this.ElectronicsId().should('exist').children('a').as('electroMenu')
            .should('have.text', 'Electronics ')
            .and('have.attr', 'href')
            .and('include', '/electronics');

        this.computerMenuId().find('ul').find('li>a').should('have.length', '3');

        this.ElectronicsId().children('div').should('exist').and('have.class', 'sublist-toggle');
        cy.get('@electroMenu').click({ force: true }).then((el) => {
            cy.url().should('include', '/electronics');
        })
    }

    Electronics_CameraPhotoSubMenu() {
        this.ElectronicsId().find('.first-level >li >a').eq(0).should('exist').as('cameraPhoto')
            .should('have.text', 'Camera & photo ')
            .and('have.attr', 'href')
            .and('include', '/camera-photo');

        cy.get('@cameraPhoto').click({ force: true }).then(() => {
            cy.url().should('include', '/camera-photo');
            cy.contains('Camera & photo');
        })
    }

    Electronics_cellPhonesSubMenu() {
        this.ElectronicsId().find('.first-level >li >a').eq(1).should('exist').as('cellPhones')
            .should('have.text', 'Cell phones ')
            .and('have.attr', 'href')
            .and('include', '/cell-phones');

        cy.get('@cellPhones').click({ force: true }).then(() => {
            cy.url().should('include', '/cell-phones');
        })
    }

    Electronics_othersSubMenu() {
        this.ElectronicsId().find('.first-level >li >a').eq(2).should('exist').as('Others')
            .should('have.text', 'Others ')
            .and('have.attr', 'href')
            .and('include', '/others');

        cy.get('@Others').click({ force: true }).then(() => {
            cy.url().should('include', '/others');
        })
    }

    ApparelId() {
        return cy.get('.top-menu >li').eq(2).should('exist').trigger('mouseover', { force: true })
    }

    ApparelMenu() {
        this.ApparelId().should('exist').children('a').as('apparelMenu')
            .should('have.text', 'Apparel ')
            .and('have.attr', 'href')
            .and('include', '/apparel');

        this.ApparelId().find('ul').find('li>a').should('have.length', '3');

        this.ApparelId().children('div').should('exist').and('have.class', 'sublist-toggle');

        cy.get('@apparelMenu').click({ force: true }).then((el) => {
            cy.url().should('include', '/apparel');
        })
    }

    Apparel_shoesSubMenu() {
        this.ApparelId().find('.first-level >li >a').eq(0).should('exist').as('shoes')
            .should('have.text', 'Shoes ')
            .and('have.attr', 'href')
            .and('include', '/shoes');

        cy.get('@shoes').click({ force: true }).then(() => {
            cy.url().should('include', '/shoes');
            cy.contains('Shoes');
        })
    }

    Apparel_clothingSubMenu() {
        this.ApparelId().find('.first-level >li >a').eq(1).should('exist').as('clothing')
            .should('have.text', 'Clothing ')
            .and('have.attr', 'href')
            .and('include', '/clothing');

        cy.get('@clothing').click({ force: true }).then(() => {
            cy.url().should('include', '/clothing');
            cy.contains('Clothing');
        })
    }

    Apparel_accessoriesSubMenu() {
        this.ApparelId().find('.first-level >li >a').eq(2).should('exist').as('accessories')
            .should('have.text', 'Accessories ')
            .and('have.attr', 'href')
            .and('include', '/accessories');

        cy.get('@accessories').click({ force: true }).then(() => {
            cy.url().should('include', '/accessories');
            cy.contains('Accessories');
        })
    }

    DigitalDownloadMenu() {
        cy.get('.top-menu >li').eq(3).should('exist').realHover().children('a').as('digitalDownloads')
            .should('have.text', 'Digital downloads ')
            .and('have.attr', 'href')
            .and('include', '/digital-downloads');

        cy.get('@digitalDownloads').click({ force: true }).then((el) => {
            cy.url().should('include', '/digital-downloads');
            cy.contains('Digital downloads');
            cy.title('nopCommerce demo store. Digital downloads');
        })
    }

    booksMenu() {
        cy.get('.top-menu >li').eq(4).should('exist').realHover().children('a').as('books')
            .should('have.text', 'Books ').invoke('hover')
            .and('have.attr', 'href')
            .and('include', '/books');

        cy.get('@books').click({ force: true }).then((el) => {
            cy.url().should('include', '/books');
            cy.contains('Books');
            cy.title('nopCommerce demo store. Books');
        })
    }

    jewelryMenu() {
        cy.get('.top-menu >li').eq(5).should('exist').realHover().children('a').as('jewelry')
            .should('have.text', 'Jewelry ')
            .and('have.attr', 'href')
            .and('include', '/jewelry');

        cy.get('@jewelry').click({ force: true }).then((el) => {
            cy.url().should('include', '/jewelry');
            cy.contains('Jewelry');
            cy.title('nopCommerce demo store. Jewelry');
        })
    }

    giftCardsMenu() {
        cy.get('.top-menu >li').eq(6).should('exist').realHover().children('a').as('giftCards')
            .should('have.text', 'Gift Cards ')
            .and('have.attr', 'href')
            .and('include', '/gift-cards');

        cy.get('@giftCards').click({ force: true }).then((el) => {
            cy.url().should('include', '/gift-cards');
            cy.contains('Gift Cards');
            cy.title('nopCommerce demo store. Gift Cards');
        })
    }
}
export default menuHome;