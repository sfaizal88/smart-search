//#region node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, l, u, { is: d, defineProperty: f, getOwnPropertyDescriptor: ee, getOwnPropertyNames: te, getOwnPropertySymbols: ne, getPrototypeOf: re } = Object, p = globalThis, ie = p.trustedTypes, ae = ie ? ie.emptyScript : "", m = p.reactiveElementPolyfillSupport, h = (e, t) => e, g = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ae : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch (e) {
				n = null;
			}
		}
		return n;
	}
}, _ = (e, t) => !d(e, t), v = {
	attribute: !0,
	type: String,
	converter: g,
	reflect: !1,
	useDefault: !1,
	hasChanged: _
};
(l = Symbol).metadata != null || (l.metadata = Symbol("metadata")), p.litPropertyMetadata != null || (p.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
var y = class extends HTMLElement {
	static addInitializer(e) {
		var t;
		this._$Ei(), ((t = this.l) == null ? this.l = [] : t).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = v) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && f(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		var r;
		let { get: i, set: a } = (r = ee(this.prototype, e)) == null ? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		} : r;
		return {
			get: i,
			set(t) {
				let r = i == null ? void 0 : i.call(this);
				a == null || a.call(this, t), this.requestUpdate(e, r, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		var t;
		return (t = this.elementProperties.get(e)) == null ? v : t;
	}
	static _$Ei() {
		if (this.hasOwnProperty(h("elementProperties"))) return;
		let e = re(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(h("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(h("properties"))) {
			let e = this.properties, t = [...te(e), ...ne(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		var e;
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((e) => e(this));
	}
	addController(e) {
		var t, n;
		((t = this._$EO) == null ? this._$EO = /* @__PURE__ */ new Set() : t).add(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) == null || n.call(e));
	}
	removeController(e) {
		var t;
		(t = this._$EO) == null || t.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		var e;
		let t = (e = this.shadowRoot) == null ? this.attachShadow(this.constructor.shadowRootOptions) : e;
		return s(t, this.constructor.elementStyles), t;
	}
	connectedCallback() {
		var e;
		this.renderRoot != null || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((e) => {
			var t;
			return (t = e.hostConnected) == null ? void 0 : t.call(e);
		});
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		var e;
		(e = this._$EO) == null || e.forEach((e) => {
			var t;
			return (t = e.hostDisconnected) == null ? void 0 : t.call(e);
		});
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			var i;
			let a = (((i = n.converter) == null ? void 0 : i.toAttribute) === void 0 ? g : n.converter).toAttribute(t, n.type);
			this._$Em = e, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			var i, a, o;
			let e = n.getPropertyOptions(r), s = typeof e.converter == "function" ? { fromAttribute: e.converter } : ((i = e.converter) == null ? void 0 : i.fromAttribute) === void 0 ? g : e.converter;
			this._$Em = r;
			let c = s.fromAttribute(t, e.type);
			this[r] = (a = c == null ? (o = this._$Ej) == null ? void 0 : o.get(r) : c) == null ? c : a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			var a, o;
			let s = this.constructor;
			if (!1 === r && (i = this[e]), n != null || (n = s.getPropertyOptions(e)), !(((a = n.hasChanged) == null ? _ : a)(i, t) || n.useDefault && n.reflect && i === ((o = this._$Ej) == null ? void 0 : o.get(e)) && !this.hasAttribute(s._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		var o, s, c;
		n && !((o = this._$Ej) == null ? this._$Ej = /* @__PURE__ */ new Map() : o).has(e) && (this._$Ej.set(e, (s = a == null ? t : a) == null ? this[e] : s), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && ((c = this._$Eq) == null ? this._$Eq = /* @__PURE__ */ new Set() : c).add(e));
	}
	async _$EP() {
		var e = this;
		e.isUpdatePending = !0;
		try {
			await e._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let t = e.scheduleUpdate();
		return t != null && await t, !e.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot != null || (this.renderRoot = this.createRenderRoot()), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			var n;
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((e) => {
				var t;
				return (t = e.hostUpdate) == null ? void 0 : t.call(e);
			}), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		var t;
		(t = this._$EO) == null || t.forEach((e) => {
			var t;
			return (t = e.hostUpdated) == null ? void 0 : t.call(e);
		}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[h("elementProperties")] = /* @__PURE__ */ new Map(), y[h("finalized")] = /* @__PURE__ */ new Map(), m == null || m({ ReactiveElement: y }), ((u = p.reactiveElementVersions) == null ? p.reactiveElementVersions = [] : u).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
var b, x = globalThis, S = (e) => e, C = x.trustedTypes, oe = C ? C.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, w = "$lit$", T = `lit$${Math.random().toFixed(9).slice(2)}$`, E = "?" + T, se = `<${E}>`, D = document, O = () => D.createComment(""), k = (e) => e === null || typeof e != "object" && typeof e != "function", A = Array.isArray, ce = (e) => A(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", j = "[ 	\n\f\r]", M = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, N = /-->/g, P = />/g, F = RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), le = /'/g, ue = /"/g, de = /^(?:script|style|textarea|title)$/i, I = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), L = Symbol.for("lit-noChange"), R = Symbol.for("lit-nothing"), z = /* @__PURE__ */ new WeakMap(), B = D.createTreeWalker(D, 129);
function V(e, t) {
	if (!A(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return oe === void 0 ? t : oe.createHTML(t);
}
var fe = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = M;
	for (let t = 0; t < n; t++) {
		var s;
		let n = e[t], c, l, u = -1, d = 0;
		for (; d < n.length && (o.lastIndex = d, l = o.exec(n), l !== null);) d = o.lastIndex, o === M ? l[1] === "!--" ? o = N : l[1] === void 0 ? l[2] === void 0 ? l[3] !== void 0 && (o = F) : (de.test(l[2]) && (i = RegExp("</" + l[2], "g")), o = F) : o = P : o === F ? l[0] === ">" ? (o = (s = i) == null ? M : s, u = -1) : l[1] === void 0 ? u = -2 : (u = o.lastIndex - l[2].length, c = l[1], o = l[3] === void 0 ? F : l[3] === "\"" ? ue : le) : o === ue || o === le ? o = F : o === N || o === P ? o = M : (o = F, i = void 0);
		let f = o === F && e[t + 1].startsWith("/>") ? " " : "";
		a += o === M ? n + se : u >= 0 ? (r.push(c), n.slice(0, u) + w + n.slice(u) + T + f) : n + T + (u === -2 ? t : f);
	}
	return [V(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, H = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = fe(t, n);
		if (this.el = e.createElement(l, r), B.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = B.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(w)) {
					let t = u[o++], n = i.getAttribute(e).split(T), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? me : r[1] === "?" ? he : r[1] === "@" ? ge : G
					}), i.removeAttribute(e);
				} else e.startsWith(T) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (de.test(i.tagName)) {
					let e = i.textContent.split(T), t = e.length - 1;
					if (t > 0) {
						i.textContent = C ? C.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], O()), B.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], O());
					}
				}
			} else if (i.nodeType === 8) if (i.data === E) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(T, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += T.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = D.createElement("template");
		return n.innerHTML = e, n;
	}
};
function U(e, t, n = e, r) {
	var i, a, o;
	if (t === L) return t;
	let s = r === void 0 ? n._$Cl : (i = n._$Co) == null ? void 0 : i[r], c = k(t) ? void 0 : t._$litDirective$;
	return (s == null ? void 0 : s.constructor) !== c && (s == null || (a = s._$AO) == null || a.call(s, !1), c === void 0 ? s = void 0 : (s = new c(e), s._$AT(e, n, r)), r === void 0 ? n._$Cl = s : ((o = n._$Co) == null ? n._$Co = [] : o)[r] = s), s !== void 0 && (t = U(e, s._$AS(e, t.values), s, r)), t;
}
var pe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		var t;
		let { el: { content: n }, parts: r } = this._$AD, i = ((t = e == null ? void 0 : e.creationScope) == null ? D : t).importNode(n, !0);
		B.currentNode = i;
		let a = B.nextNode(), o = 0, s = 0, c = r[0];
		for (; c !== void 0;) {
			if (o === c.index) {
				let t;
				c.type === 2 ? t = new W(a, a.nextSibling, this, e) : c.type === 1 ? t = new c.ctor(a, c.name, c.strings, this, e) : c.type === 6 && (t = new _e(a, this, e)), this._$AV.push(t), c = r[++s];
			}
			o !== (c == null ? void 0 : c.index) && (a = B.nextNode(), o++);
		}
		return B.currentNode = D, i;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, W = class e {
	get _$AU() {
		var e, t;
		return (e = (t = this._$AM) == null ? void 0 : t._$AU) == null ? this._$Cv : e;
	}
	constructor(e, t, n, r) {
		var i;
		this.type = 2, this._$AH = R, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = (i = r == null ? void 0 : r.isConnected) == null ? !0 : i;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = U(this, e, t), k(e) ? e === R || e == null || e === "" ? (this._$AH !== R && this._$AR(), this._$AH = R) : e !== this._$AH && e !== L && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ce(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== R && k(this._$AH) ? this._$AA.nextSibling.data = e : this.T(D.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		var t;
		let { values: n, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = H.createElement(V(r.h, r.h[0]), this.options)), r);
		if (((t = this._$AH) == null ? void 0 : t._$AD) === i) this._$AH.p(n);
		else {
			let e = new pe(i, this), t = e.u(this.options);
			e.p(n), this.T(t), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = z.get(e.strings);
		return t === void 0 && z.set(e.strings, t = new H(e)), t;
	}
	k(t) {
		A(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(O()), this.O(O()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		var n;
		for ((n = this._$AP) == null || n.call(this, !1, !0, t); e !== this._$AB;) {
			let t = S(e).nextSibling;
			S(e).remove(), e = t;
		}
	}
	setConnected(e) {
		var t;
		this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
	}
}, G = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = R, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = R;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = U(this, e, t, 0), a = !k(e) || e !== this._$AH && e !== L, a && (this._$AH = e);
		else {
			var o;
			let r = e, s, c;
			for (e = i[0], s = 0; s < i.length - 1; s++) c = U(this, r[n + s], t, s), c === L && (c = this._$AH[s]), a || (a = !k(c) || c !== this._$AH[s]), c === R ? e = R : e !== R && (e += ((o = c) == null ? "" : o) + i[s + 1]), this._$AH[s] = c;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === R ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e == null ? "" : e);
	}
}, me = class extends G {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === R ? void 0 : e;
	}
}, he = class extends G {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== R);
	}
}, ge = class extends G {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		var n;
		if ((e = (n = U(this, e, t, 0)) == null ? R : n) === L) return;
		let r = this._$AH, i = e === R && r !== R || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, a = e !== R && (r === R || i);
		i && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		var t, n;
		typeof this._$AH == "function" ? this._$AH.call((t = (n = this.options) == null ? void 0 : n.host) == null ? this.element : t, e) : this._$AH.handleEvent(e);
	}
}, _e = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		U(this, e);
	}
}, ve = x.litHtmlPolyfillSupport;
ve == null || ve(H, W), ((b = x.litHtmlVersions) == null ? x.litHtmlVersions = [] : b).push("3.3.2");
var ye = (e, t, n) => {
	var r;
	let i = (r = n == null ? void 0 : n.renderBefore) == null ? t : r, a = i._$litPart$;
	if (a === void 0) {
		var o;
		let e = (o = n == null ? void 0 : n.renderBefore) == null ? null : o;
		i._$litPart$ = a = new W(t.insertBefore(O(), e), e, void 0, n == null ? {} : n);
	}
	return a._$AI(e), a;
}, be, xe, K = globalThis, q = class extends y {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		var e;
		let t = super.createRenderRoot();
		return (e = this.renderOptions).renderBefore != null || (e.renderBefore = t.firstChild), t;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ye(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		var e;
		super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
	}
	disconnectedCallback() {
		var e;
		super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
	}
	render() {
		return L;
	}
};
q._$litElement$ = !0, q.finalized = !0, (be = K.litElementHydrateSupport) == null || be.call(K, { LitElement: q });
var Se = K.litElementPolyfillSupport;
Se == null || Se({ LitElement: q }), ((xe = K.litElementVersions) == null ? K.litElementVersions = [] : xe).push("4.2.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
var Ce = (e) => (t, n) => {
	n === void 0 ? customElements.define(e, t) : n.addInitializer(() => {
		customElements.define(e, t);
	});
}, we = {
	attribute: !0,
	type: String,
	converter: g,
	reflect: !1,
	hasChanged: _
}, Te = (e = we, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e, !0, n);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e, !0, n);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function J(e) {
	return (t, n) => typeof n == "object" ? Te(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/typeof.js
function Y(e) {
	"@babel/helpers - typeof";
	return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Y(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/toPrimitive.js
function Ee(e, t) {
	if (Y(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Y(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/toPropertyKey.js
function De(e) {
	var t = Ee(e, "string");
	return Y(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/defineProperty.js
function Oe(e, t, n) {
	return (t = De(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/objectSpread2.js
function ke(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Ae(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ke(Object(n), !0).forEach(function(t) {
			Oe(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
function X(e) {
	return J(Ae(Ae({}, e), {}, {
		state: !0,
		attribute: !1
	}));
}
//#endregion
//#region src/component/smart-search.utils.ts
function je(e, t, n) {
	if (!e) return "";
	if (!n || !t) return e;
	let r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), i = RegExp(`(${r})`, "gi");
	return e.split(i).map((e) => e.toLowerCase() === t.toLowerCase() ? I`<mark>${e}</mark>` : e);
}
function Me(e, t) {
	let n = t.querySelectorAll(".item")[e];
	n && typeof n.scrollIntoView == "function" && n.scrollIntoView({ block: "nearest" });
}
//#endregion
//#region src/data/mockData.ts
var Ne = [
	{
		id: "1",
		label: "Iron man",
		type: "account",
		subtitle: "Tony Stark"
	},
	{
		id: "2",
		label: "Captain America",
		type: "customer"
	},
	{
		id: "3",
		label: "Thor",
		type: "account"
	},
	{
		id: "4",
		label: "Hulk",
		type: "account"
	},
	{
		id: "5",
		label: "Black Widow",
		type: "customer"
	},
	{
		id: "6",
		label: "Hawkeye",
		type: "customer"
	},
	{
		id: "7",
		label: "Spider-Man",
		type: "transaction"
	},
	{
		id: "8",
		label: "Doctor Strange",
		type: "transaction"
	},
	{
		id: "9",
		label: "Black a+b Panther",
		type: "transaction"
	},
	{
		id: "10",
		label: "Captain Marvel",
		type: "account"
	},
	{
		id: "11",
		label: "Ant-Man",
		type: "account"
	},
	{
		id: "12",
		label: "Wasp",
		type: "transaction"
	},
	{
		id: "13",
		label: "Scarlet Witch",
		type: "transaction"
	},
	{
		id: "14",
		label: "Vision",
		type: "account"
	},
	{
		id: "15",
		label: "Falcona+b",
		type: "account"
	},
	{
		id: "16",
		label: "Winter Soldier",
		type: "transaction"
	},
	{
		id: "17",
		label: "War Machine",
		type: "customer"
	},
	{
		id: "18",
		label: "Star-Lord",
		type: "customer"
	},
	{
		id: "19",
		label: "Gamora",
		type: "customer"
	},
	{
		id: "20",
		label: "Drax the Destroyer",
		type: "account"
	}
];
//#endregion
//#region src/component/smart-search.service.ts
function Pe(e, t, n) {
	return Array.isArray(e) ? (e == null ? [] : e).filter((e) => {
		let r = e.label.toLowerCase().includes(t.toLowerCase()), i = n === "all" || e.type === n;
		return r && i;
	}) : [];
}
async function Fe(e) {
	return await new Promise((e) => setTimeout(e, 500)), Ne.filter((t) => t.label.toLowerCase().includes(e.toLowerCase()));
}
//#endregion
//#region src/component/smart-search.styles.ts
var Ie = [
	o`
  :host([theme="light"]) {
    --input-bg: white;
    --text-color: black;
    --border-color: #ccc;
    --dropdown-bg: white;
    --hover-bg: #f5f5f5;
    --active-bg: #dbeafe;
    --muted-text: gray;
    --error-color: red;
    --btn-bg: white;
    --highlight-bg: yellow;
  }
`,
	o`
  :host([theme="dark"]) {
    --input-bg: #1f2937;
    --text-color: #f9fafb;
    --border-color: #374151;
    --dropdown-bg: #111827;
    --hover-bg: #374151;
    --active-bg: #2563eb;
    --muted-text: #9ca3af;
    --error-color: #f87171;
    --btn-bg: #1f2937;
    --highlight-bg: #facc15;
  }
`,
	o`

  :host {
    display: block;
    font-family: Arial, sans-serif;
    color: var(--text-color);
  }

  .search-container {
    position: relative;
    width: 100%;
  }

  input {
    padding: 12px 24px 12px 40px;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    background: var(--input-bg);
    color: var(--text-color);   
    border: 1px solid var(--border-color);
    border-radius: 4px;
  }

  input:disabled {
    background: #f6f6f6;
    color: #9ca3af;
    cursor: not-allowed;
    border-color: #f6f6f6;
  }

  input:disabled::placeholder {
    color: #9ca3af;
  }

  .dropdown {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
    border: 1px solid var(--border-color);
    background: var(--dropdown-bg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    max-height: 200px;
    overflow-y: auto; 
  }

  .subtitle {
    font-size: 10px;
    color: var(--muted-text);
  }

  .dropdown.bottom {
    top: calc(100% + 4px);
  }

  .dropdown.top {
    bottom: calc(100% + 4px);
  }

  .item {
    padding: 8px;
    cursor: pointer;
    color: var(--text-color);
  }

  .item-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .error {
    color: var(--error-color);
    margin-top: 6px;
    font-size: 12px;
  }

  .item:hover {
    background: var(--hover-bg);
  }

  .item.active {
    background: var(--active-bg);
  }

  .clear-icon {
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }

  .loader {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

  .search {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

  .no-result {
    color: var(--muted-text);
  }

  .group-btns {
    display: flex;
    gap: 6px;
    margin-top: 6px;
    flex-wrap: wrap;
  }

  .primary-btn {
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    background: var(--btn-bg);
    color: var(--text-color);
    border-radius: 4px;
  }

  .primary-btn.active {
    background: var(--active-bg);
  }

  mark {
    background: var(--highlight-bg);
    color: black;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    input {
      font-size: 16px;
      min-height: 44px;
    }
    
    .primary-btn{ 
      padding: 8px 12px;
      min-height: 36px;
    }

    .group-btns {
      gap: 4px;
      flex-direction: column;
    }

    .dropdown {
      max-height: 240px;
    }
  }
`
], Le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnJJREFUWIXFlz1PFEEYx38H13l4FzuNQGLkjsROsUSl8+VTiMsldoYvQZRolDtMiKWxNmiCX8DCRlt8a+5YCxo8GsCCO4qZdZ+dm72ZXTbhSSbZzPPyf2aet1k4YyrlkJ8D5oErwAXgHxACu8AX4CswKNBHAKaBlgYaONYOsAZMFQFcA54DRx7A5joEVoFqXvBZ4KdhtAu0gbtAHTinV13vtVE3IHV+AI2s4AtATxgJgSWg7KFb1rIyXH+BO77gDa0QKW+R7xorwHthZx+45lKqkbz2NWAsB3hEY9qGDMfIw7wQwp+A8VOASyc+CLvP0gSnibM9BCZSjPkAmnQe+ENcHdYSbQkvlyz8Ta28OAL8oZbZtPCawv4rk1kiztouw9k+rg0PgGMgsAAEmhed0gxfmbhEuxhd+Kbwrm0/HIsCwHQiMHhpt7QucG5IxrJg3EtRtgEFKXtp9EDgPEnzbGaEAZsTvuCgOmaE05KMd4JRcRiBZDgGQB947KFXETpvIS6ZIsanz2gfKtFoY1/sXXIYCYA3WrevVwl1pa4QXBTfPenAb8G46gDfEOBNvfp6b8PhhMwvickcpyvDR2Qvw+uSUSJuEjvka0TSCVcj6mDJGTm1mhaAIlvxS5vyFPEpQ9QAMamIYXQATKYprwovixzHH4XdlVHCVeC7EC76QbKN/WYT1AD2hFLeJ9kEySfZHu42/59uG06EqCTyfZQ2iWMegd/y911RnWQ4ohJdB+6jnu0VvWb13muGn+XbZDi5SVXgKSpzs/6YHKASzhlzH5pE1W7HA7ijZS/7GM76cwqqhc6jZkZN7/WAX8Bn4FsOm2dHJ+dAFhmq3mQEAAAAAElFTkSuQmCC", Re = "data:image/gif;base64,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", ze = "data:image/png;base64,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";
//#endregion
//#region \0@oxc-project+runtime@0.124.0/helpers/decorate.js
function Z(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/component/smart-search.ts
var Q, $ = (Q = class extends q {
	constructor(...e) {
		super(...e), this.query = "", this.isOpen = !1, this.activeIndex = -1, this.selectedFilter = "all", this.loading = !1, this.dropdownPosition = "bottom", this.debouncedQuery = "", this.error = "", this.items = [], this.placeholder = "Search...", this.noResultsText = "No results found", this.disabled = !1, this.debounceTime = 500, this.value = "", this.enableHighlight = !1, this.theme = "light", this.handleWindowChange = () => {
			this.isOpen && this.updateDropdownPosition();
		}, this.handleOutsideClick = (e) => {
			e.composedPath().includes(this) || (this.isOpen = !1);
		};
	}
	updated(e) {
		e.has("value") && (this.query = this.value, this.debouncedQuery = this.value);
	}
	updateDropdownPosition() {
		let e = this.renderRoot.querySelector("input");
		if (!e) return;
		let t = e.getBoundingClientRect(), n = window.innerHeight - t.bottom, r = t.top;
		n < 220 && r > n ? this.dropdownPosition = "top" : this.dropdownPosition = "bottom";
	}
	handleInput(e) {
		var t = this;
		if (this.disabled) return;
		let n = e.target;
		this.value = n.value, this.query = n.value, this.isOpen = this.query.length > 0, this.activeIndex = 0, this.error = "", clearTimeout(this.debounceTimer), this.debounceTimer = window.setTimeout(async () => {
			if (t.debouncedQuery = t.query, !t.debouncedQuery) {
				t.items = [], t.loading = !1, t.error = "";
				return;
			}
			try {
				t.loading = !0, t.error = "", t.items = await Fe(t.debouncedQuery), t.loading = !1, t.activeIndex = 0, t.updateDropdownPosition();
			} catch (e) {
				t.loading = !1, t.items = [], t.error = "Something went wrong. Please try again.";
			}
		}, this.debounceTime), this.dispatchEvent(new CustomEvent("search-change", {
			detail: {
				query: this.query,
				value: this.value
			},
			bubbles: !0,
			composed: !0
		}));
	}
	clearInput() {
		this.query = "", this.debouncedQuery = "", this.items = [], this.isOpen = !1, this.activeIndex = -1, this.loading = !1, this.error = "", this.value = "";
	}
	selectItem(e) {
		e.disabled || (this.query = e.label, this.value = e.label, this.debouncedQuery = e.label, this.isOpen = !1, this.activeIndex = -1, this.dispatchEvent(new CustomEvent("result-select", {
			detail: e,
			bubbles: !0,
			composed: !0
		})));
	}
	getFilteredItems() {
		return Pe(this.items, this.query, this.selectedFilter);
	}
	handleKeyDown(e) {
		let t = this.getFilteredItems();
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), t.length > 0 && (this.activeIndex = (this.activeIndex + 1) % t.length, Me(this.activeIndex, this.renderRoot));
				break;
			case "ArrowUp":
				e.preventDefault(), t.length > 0 && (this.activeIndex = this.activeIndex <= 0 ? t.length - 1 : this.activeIndex - 1, Me(this.activeIndex, this.renderRoot));
				break;
			case "Enter":
				t[this.activeIndex] && this.selectItem(t[this.activeIndex]);
				break;
			case "Escape":
				this.isOpen = !1;
				break;
		}
	}
	setFilter(e) {
		this.selectedFilter = e, this.activeIndex = 0, this.dispatchEvent(new CustomEvent("filter-change", {
			detail: { filter: e },
			bubbles: !0,
			composed: !0
		}));
	}
	renderFilterButton(e, t) {
		return I`
      <button
        class="primary-btn ${this.selectedFilter === e && "active"}"
        @click=${() => this.setFilter(e)}
      >
        ${t}
      </button>
    `;
	}
	connectedCallback() {
		super.connectedCallback(), window.addEventListener("resize", this.handleWindowChange), window.addEventListener("scroll", this.handleWindowChange, !0), document.addEventListener("click", this.handleOutsideClick);
	}
	disconnectedCallback() {
		window.removeEventListener("resize", this.handleWindowChange), window.removeEventListener("scroll", this.handleWindowChange, !0), document.removeEventListener("click", this.handleOutsideClick), super.disconnectedCallback();
	}
	render() {
		let e = this.getFilteredItems();
		return I`
      <div class="search-container">
        <input
          type="text"
          placeholder=${this.placeholder}
          .value=${this.query}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
          role="combobox"
          aria-label="Search"
          aria-expanded=${this.isOpen}  
          aria-haspopup="listbox"
          aria-controls="search-list"
          ?disabled=${this.disabled}
          aria-autocomplete="list"
          aria-disabled=${this.disabled}
        />
        <img class="search" src=${ze} alt="search"/>
        <img class="clear-icon" src=${Le} alt="clear" @click=${this.clearInput} ?hidden=${!this.query || this.loading}/>
        <img class="loader" src=${Re} alt="loading" ?hidden=${!this.loading}/>
        
        ${this.isOpen && !this.loading ? I`
          <div class="dropdown ${this.dropdownPosition}" role="listbox" id="search-list">
            ${e.length === 0 ? I`<div class="item no-result" role="option">${this.noResultsText}</div>` : e.map((e, t) => I`
              <div
                class="item ${t === this.activeIndex ? "active" : ""} ${e.disabled ? "item-disabled" : ""}"
                role="option"
                id="item-${t}"
                aria-selected=${t === this.activeIndex}
                @click=${() => this.selectItem(e)}
                aria-disabled=${e.disabled}
              >
                ${je(e.label, this.debouncedQuery, this.enableHighlight)}
                ${e.subtitle ? I`<div class="subtitle">
                  ${je(e.subtitle, this.debouncedQuery, this.enableHighlight)}
                </div>` : ""}
              </div>
            `)}
          </div>
        ` : ""}
        </div>
        <div class="group-btns">
          ${this.renderFilterButton("all", "All")}
          ${this.renderFilterButton("account", "Accounts")}
          ${this.renderFilterButton("customer", "Customers")}
          ${this.renderFilterButton("transaction", "Transactions")}
        </div>
        <div class="error" hidden=${!this.error}> ${this.error}</div>
    `;
	}
}, Q.styles = Ie, Q);
Z([X()], $.prototype, "query", void 0), Z([X()], $.prototype, "isOpen", void 0), Z([X()], $.prototype, "activeIndex", void 0), Z([X()], $.prototype, "selectedFilter", void 0), Z([X()], $.prototype, "loading", void 0), Z([X()], $.prototype, "dropdownPosition", void 0), Z([X()], $.prototype, "debouncedQuery", void 0), Z([X()], $.prototype, "error", void 0), Z([J({ type: Array })], $.prototype, "items", void 0), Z([J({ type: String })], $.prototype, "placeholder", void 0), Z([J({ type: String })], $.prototype, "noResultsText", void 0), Z([J({ type: Boolean })], $.prototype, "disabled", void 0), Z([J({ type: Number })], $.prototype, "debounceTime", void 0), Z([J({ type: String })], $.prototype, "value", void 0), Z([J({ type: Boolean })], $.prototype, "enableHighlight", void 0), Z([J({ reflect: !0 })], $.prototype, "theme", void 0), $ = Z([Ce("smart-search")], $);
//#endregion
