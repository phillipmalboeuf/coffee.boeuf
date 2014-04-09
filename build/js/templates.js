this["templates"] = this["templates"] || {};

this["templates"]["products"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n	<div class=\"grid category bigass_bottom\">\n		<div class=\"col col--9of12\">\n			<h2 class=\"small_bottom\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n			<p><small>* Minimum order 6 per item. Items priced individually.</small></p>\n		</div>\n		<div class=\"col col--1of12 text_underline text_center\">\n			<small>Price</small>\n		</div>\n		<div class=\"col col--1of12 text_underline text_center\">\n			<small>Quantity</small>\n		</div>\n		<div class=\"col col--1of12 text_underline text_center\">\n			<small>Total</small>\n		</div>\n		<hr>\n\n		";
  options={hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data}
  if (helper = helpers.products) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.products); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.products) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<div class=\"col col--4of12\">\n			";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n		</div>\n		<div class=\"col col--5of12\">\n			";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n		</div>\n		<div class=\"col col--1of12 text_center\">\n			";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "$\n		</div>\n		<div class=\"col col--1of12 text_center\">\n			<input type=\"text\" class=\"input input--quantity js-quantity\" data-item-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-item-price=\"";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"quantity\" placeholder=\"0\" value=\"\">\n			<a href=\"#\" hidden class=\"snipcart-add-item\" id=\"snipcart-add-item_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-item-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-item-name=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-item-price=\"";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-item-url=\""
    + escapeExpression(((stack1 = (depth2 && depth2.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-item-description=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-item-quantity=\"0\"></a>\n		</div>\n		<div class=\"col col--1of12 text_center\">\n			<span class=\"product__total js-total\" id=\"total_";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">0.00</span>$\n		</div>\n		<hr>\n		";
  return buffer;
  }

  options={hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}
  if (helper = helpers.categories) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.categories); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.categories) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data}); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });