import { sayHello } from '../composables/hello';
import { describe, test, expect, vi} from 'vitest';

describe('sayHello', () => {
    test('should alert hello message', () => {
        window.alert = vi.fn();
        sayHello('world');
        expect(window.alert).toHaveBeenCalledWith('Hello WORLD!');
    });
});

/*
describe('registerEndpoint', () => {
    test('should register an endpoint', async () => {
        console.log(process.env.NODE_ENV);
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json();

        expect(data).toEqual({
            title: 'Un beau dindon',
            price: 100000
        });
    });
});
*/