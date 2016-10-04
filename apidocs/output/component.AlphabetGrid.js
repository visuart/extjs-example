Ext.data.JsonP.component_AlphabetGrid({"tagname":"class","name":"component.AlphabetGrid","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"AlphabetGrid.js","href":"AlphabetGrid.html#component-AlphabetGrid"}],"aliases":{"widget":["ALPHABET-GRID"]},"alternateClassNames":[],"extends":"Ext.grid.Panel","mixins":[],"requires":["store.Alphabet"],"uses":[],"members":[{"name":"availableLettersStore","tagname":"cfg","owner":"component.AlphabetGrid","id":"cfg-availableLettersStore","meta":{}},{"name":"columns","tagname":"property","owner":"component.AlphabetGrid","id":"property-columns","meta":{"private":true}},{"name":"selType","tagname":"property","owner":"component.AlphabetGrid","id":"property-selType","meta":{"private":true}},{"name":"store","tagname":"property","owner":"component.AlphabetGrid","id":"property-store","meta":{"private":true}},{"name":"getContextActions","tagname":"method","owner":"component.AlphabetGrid","id":"method-getContextActions","meta":{"private":true}},{"name":"initComponent","tagname":"method","owner":"component.AlphabetGrid","id":"method-initComponent","meta":{"private":true}},{"name":"initStores","tagname":"method","owner":"component.AlphabetGrid","id":"method-initStores","meta":{"private":true}},{"name":"initToolbar","tagname":"method","owner":"component.AlphabetGrid","id":"method-initToolbar","meta":{"private":true}},{"name":"removeSelection","tagname":"method","owner":"component.AlphabetGrid","id":"method-removeSelection","meta":{}},{"name":"setData","tagname":"method","owner":"component.AlphabetGrid","id":"method-setData","meta":{}}],"code_type":"ext_define","id":"class-component.AlphabetGrid","component":false,"superclasses":["Ext.grid.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.Panel<div class='subclass '><strong>component.AlphabetGrid</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/store.Alphabet' rel='store.Alphabet' class='docClass'>store.Alphabet</a></div><h4>Files</h4><div class='dependency'><a href='source/AlphabetGrid.html#component-AlphabetGrid' target='_blank'>AlphabetGrid.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-availableLettersStore' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-cfg-availableLettersStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-cfg-availableLettersStore' class='name expandable'>availableLettersStore</a> : <a href=\"#!/api/store.Alphabet\" rel=\"store.Alphabet\" class=\"docClass\">store.Alphabet</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-columns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-property-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-property-columns' class='name expandable'>columns</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{text: &#39;English letter&#39;, dataIndex: &#39;letter&#39;, flex: 1}]</code></p></div></div></div><div id='property-selType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-property-selType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-property-selType' class='name expandable'>selType</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;checkboxmodel&#39;</code></p></div></div></div><div id='property-store' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-property-store' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-property-store' class='name expandable'>store</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{model: &#39;model.Letter&#39;, sorters: [{property: &#39;letter&#39;}], proxy: &#39;memory&#39;}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getContextActions' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-method-getContextActions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-method-getContextActions' class='name expandable'>getContextActions</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initStores' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-method-initStores' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-method-initStores' class='name expandable'>initStores</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initToolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-method-initToolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-method-initToolbar' class='name expandable'>initToolbar</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-removeSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-method-removeSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-method-removeSelection' class='name expandable'>removeSelection</a>( <span class='pre'>confirm</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>confirm</span> : boolean<div class='sub-desc'>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='component.AlphabetGrid'>component.AlphabetGrid</span><br/><a href='source/AlphabetGrid.html#component-AlphabetGrid-method-setData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/component.AlphabetGrid-method-setData' class='name expandable'>setData</a>( <span class='pre'>records</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : <a href=\"#!/api/model.Letter\" rel=\"model.Letter\" class=\"docClass\">model.Letter</a>[]<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});