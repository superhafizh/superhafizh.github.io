import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, q as text, a as space, E as svg_element, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, F as claim_svg_element, n as attr, b as insert_hydration, G as append_hydration, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out } from "../../chunks/index-c0f98e4a.js";
const app = "";
function create_fragment(ctx) {
  let div4;
  let div0;
  let a0;
  let t0;
  let t1;
  let div1;
  let t2;
  let div3;
  let ul0;
  let li0;
  let a1;
  let t3;
  let t4;
  let li1;
  let a2;
  let t5;
  let t6;
  let div2;
  let label;
  let svg;
  let path;
  let t7;
  let ul1;
  let li2;
  let a3;
  let t8;
  let t9;
  let li3;
  let a4;
  let t10;
  let t11;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      div4 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text("Superhafizh");
      t1 = space();
      div1 = element("div");
      t2 = space();
      div3 = element("div");
      ul0 = element("ul");
      li0 = element("li");
      a1 = element("a");
      t3 = text("Projects");
      t4 = space();
      li1 = element("li");
      a2 = element("a");
      t5 = text("Contact Me");
      t6 = space();
      div2 = element("div");
      label = element("label");
      svg = svg_element("svg");
      path = svg_element("path");
      t7 = space();
      ul1 = element("ul");
      li2 = element("li");
      a3 = element("a");
      t8 = text("Projects");
      t9 = space();
      li3 = element("li");
      a4 = element("a");
      t10 = text("Contact Me");
      t11 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Superhafizh");
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div1_nodes.forEach(detach);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      ul0 = claim_element(div3_nodes, "UL", { class: true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Projects");
      a1_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t4 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t5 = claim_text(a2_nodes, "Contact Me");
      a2_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label = claim_element(div2_nodes, "LABEL", { tabindex: true, class: true });
      var label_nodes = children(label);
      svg = claim_svg_element(label_nodes, "svg", {
        xmlns: true,
        class: true,
        fill: true,
        viewBox: true,
        stroke: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      label_nodes.forEach(detach);
      t7 = claim_space(div2_nodes);
      ul1 = claim_element(div2_nodes, "UL", { tabindex: true, class: true });
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", {});
      var li2_nodes = children(li2);
      a3 = claim_element(li2_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t8 = claim_text(a3_nodes, "Projects");
      a3_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t9 = claim_space(ul1_nodes);
      li3 = claim_element(ul1_nodes, "LI", {});
      var li3_nodes = children(li3);
      a4 = claim_element(li3_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t10 = claim_text(a4_nodes, "Contact Me");
      a4_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t11 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a0, "class", "btn btn-ghost normal-case text-xl font-serif text-warning");
      attr(div0, "class", "navbar-start");
      attr(div1, "class", "navbar-center ");
      attr(a1, "href", "/#projects-section");
      attr(a2, "href", "/#contact-section");
      attr(ul0, "class", "menu menu-horizontal px-1 hidden md:flex");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "stroke-width", "2");
      attr(path, "d", "M4 6h16M4 12h8m-8 6h16");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-5 w-5");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke", "currentColor");
      attr(label, "tabindex", "0");
      attr(label, "class", "btn btn-ghost lg:hidden");
      attr(a3, "href", "/#projects-section");
      attr(a4, "href", "/#contact-section");
      attr(ul1, "tabindex", "0");
      attr(ul1, "class", "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52");
      attr(div2, "class", "dropdown dropdown-end");
      attr(div3, "class", "navbar-end font-display");
      attr(div4, "class", "navbar bg-base-100");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div0);
      append_hydration(div0, a0);
      append_hydration(a0, t0);
      append_hydration(div4, t1);
      append_hydration(div4, div1);
      append_hydration(div4, t2);
      append_hydration(div4, div3);
      append_hydration(div3, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, a1);
      append_hydration(a1, t3);
      append_hydration(ul0, t4);
      append_hydration(ul0, li1);
      append_hydration(li1, a2);
      append_hydration(a2, t5);
      append_hydration(div3, t6);
      append_hydration(div3, div2);
      append_hydration(div2, label);
      append_hydration(label, svg);
      append_hydration(svg, path);
      append_hydration(div2, t7);
      append_hydration(div2, ul1);
      append_hydration(ul1, li2);
      append_hydration(li2, a3);
      append_hydration(a3, t8);
      append_hydration(ul1, t9);
      append_hydration(ul1, li3);
      append_hydration(li3, a4);
      append_hydration(a4, t10);
      insert_hydration(target, t11, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      if (detaching)
        detach(t11);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
