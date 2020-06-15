import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, b as space, e as element, t as text, H as query_selector_all, j as detach_dev, k as claim_space, c as claim_element, f as children, h as claim_text, m as add_location, l as attr_dev, n as insert_dev, o as append_dev, u as noop } from './client.4383f30e.js';

/* src/routes/glossary.svelte generated by Svelte v3.22.2 */

const file = "src/routes/glossary.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Glossary");
			t2 = space();
			p = element("p");
			t3 = text("TODO.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-89o93s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Glossary");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "TODO.");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Glossary";
			add_location(h1, file, 6, 2, 105);
			attr_dev(div0, "class", "inside");
			add_location(div0, file, 5, 1, 82);
			attr_dev(div1, "class", "page-header");
			add_location(div1, file, 4, 0, 55);
			add_location(p, file, 10, 0, 139);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Glossary> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Glossary", $$slots, []);
	return [];
}

class Glossary extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Glossary",
			options,
			id: create_fragment.name
		});
	}
}

export default Glossary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvc3NhcnkuOWRkYjMxYTkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
