import { ItemsComponent } from "~/app/item/items.component";
import { ItemService } from "~/app/item/item.service";

describe('', () => {

    let  component: ItemsComponent;

    beforeEach(() => {
        component = new ItemsComponent(new ItemService());
    });

    it('should be defined', () => {
        expect(component).toBeTruthy();
    });


});