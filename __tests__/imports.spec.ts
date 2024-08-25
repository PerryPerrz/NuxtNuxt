import { describe, test, expect } from "vitest";

describe("imports vue components", () => {
    test('normal imports as expected', async ()=>{
        const cmp = await import('../components/ComponentA.vue');
        expect(cmp).toBeDefined();

        const cmp2 = await import('../components/ComponentB.vue');
        expect(cmp2).toBeDefined();
    })

    test('dynamic import', async ()=>{
        const cmp = await import(`../components/ComponentA.vue`);
        expect(cmp).toBeDefined();
    })

    test('dynamic import with variable', async ()=>{
        const name = 'ComponentA';
        const cmp = await import(`../components/${name}.vue`);
        expect(cmp).toBeDefined();
    })
});