import { ItemService } from "~/app/item/item.service";

describe('ItemService', () => {

    let service: ItemService;

    beforeEach(() => {
        service = new ItemService();
    });

    it('should be defined', () => {
        expect(service).toBeTruthy();
    });

});