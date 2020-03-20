import { ItemsComponent } from "~/app/item/items.component";
import { ItemService } from "~/app/item/item.service";
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from "nativescript-angular/testing";

describe('Items Component Standard Test', () => {

    let  component: ItemsComponent;

    beforeEach(() => {
        component = new ItemsComponent(new ItemService());
    });

    it('should be defined', () => {
        expect(component).toBeTruthy();
    });

});

describe('Renderer E2E', () => {

    beforeEach(nsTestBedBeforeEach([ItemsComponent], [ItemService]));
    afterEach(nsTestBedAfterEach(false));

    it('should be defined',  () => {

        return nsTestBedRender(ItemsComponent).then((fixture) => {
            expect(fixture.componentInstance).toBeTruthy();
        });

    });

}); 