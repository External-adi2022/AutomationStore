///<reference types='cypress'/>

import menuHome from '../support/page-objects/MenuHome-page.po'

describe('Validate Drop down Menu list of Home page', () => {

    const menuBar = new menuHome();

    beforeEach('Validate visit to home page', () => {
        menuBar.VisitHomePage();
    })

    context('Validate Computer Menu', () => {
        it('Validate computer drop down list', () => {
            menuBar.computerMenu();
        })

        it('Validate Desktops drop down list', () => {
            menuBar.Computer_DesktopsSubMenu();
        })

        it('Validate Notebooks drop down list', () => {
            menuBar.Computer_NotebooksSubMenu();
        })

        it('Validate Software drop down list', () => {
            menuBar.Computer_SoftwareSubMenu();
        })
    })

    context('Validate Electronics Menu', () => {
        it('Validate list of menu items in Electronics Menu', () => {
            menuBar.ElectronicsMenu();
        })

        it('Validate list of CameraPhoto Sub menu items in Electronics Menu', () => {
            menuBar.Electronics_CameraPhotoSubMenu();
        })

        it('Validate list of cellPhones Sub menu items in Electronics Menu', () => {
            menuBar.Electronics_cellPhonesSubMenu();
        })

        it('Validate list of others Sub menu items in Electronics Menu', () => {
            menuBar.Electronics_othersSubMenu();
        })
    })

    context('Validate Apparel Menu', () => {
        it('Validate menu items i.e Apparel Menu', () => {
            menuBar.ApparelMenu();
        })

        it('Validate list of shoes Sub menu items in Apparel Menu', () => {
            menuBar.Apparel_shoesSubMenu();
        })

        it('Validate list of clothing Sub menu items in Apparel Menu', () => {
            menuBar.Apparel_clothingSubMenu();
        })

        it('Validate list of accessories Sub menu items in Apparel Menu', () => {
            menuBar.Apparel_accessoriesSubMenu();
        })
    })

    context('Validate Digital downloads Menu', () => {
        it('Validate menu items i.e Digital downloads Menu', () => {
            menuBar.DigitalDownloadMenu();
        })
    })

    context('Validate books Menu', () => {
        it('Validate menu items i.e books Menu', () => {
            menuBar.booksMenu();
        })
    })

    context('Validate jewelry Menu', () => {
        it('Validate menu items i.e jewelry Menu', () => {
            menuBar.jewelryMenu();
        })
    })

    context('Validate Gift Cards Menu', () => {
        it('Validate menu items i.e Gift Cards Menu', () => {
            menuBar.giftCardsMenu();
        })
    })

})