import { ItemService } from "~/app/item/item.service";
import { nsTestBedBeforeEach } from "nativescript-angular/testing";
import { TestBed } from "@angular/core/testing";

describe('ItemService', () => {

    let service: ItemService;

    beforeEach(() => {
        service = new ItemService();
    });

    it('should be defined', () => {
        expect(service).toBeTruthy();
    });

});

describe("ItemsService Test", () => {
    let service: ItemService;

    beforeEach(nsTestBedBeforeEach([], [ItemService]));

    it("should use ItemService", () => {
        service = TestBed.get(ItemService);
        expect(service.getItems).toBeTruthy();
        expect(service.getItem).toBeTruthy();
    });
});