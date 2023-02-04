/* block.js */
 

wp.blocks.registerBlockType('ajil-gutenberg/notice-block', {

   title: 'Related Pages', // Block name visible to user

   icon: 'lightbulb', // Toolbar icon can be either using WP Dashicons or custom SVG

   category: 'common', // Under which category the block would appear
   
    attributes:{
		 
		pagetitle:{type: 'string'},
		pagedescription:{type: 'string'},
		pagelink:{type: 'string'},
	 },
	 edit: function(props){
		 
		 
		 function updatepageTitle(event){ props.setAttributes({pagetitle:event.target.value}) }
		 function updatepageDescription(event){ props.setAttributes({pagedescription:event.target.value}) }
		 function updatepageLink(event){ props.setAttributes({pagelink:event.target.value}) }
		 
		 
		  return React.createElement("div", {
  class: "Company"
}, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, " Page title"), /*#__PURE__*/React.createElement("input", {
  type: "text",
  value: "",
  placeholder: "Page title",
  onChange: updatepageTitle,
  value: props.attributes.pagetitle
})), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("label", null, "Page Description"), /*#__PURE__*/React.createElement("textarea", {
  placeholder: "Page Description",
  onChange: updatepageDescription
}, props.attributes.pagedescription)), /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("label", null, "Link"), /*#__PURE__*/React.createElement("input", {
  type: "text",
  value: "",
  placeholder: "Link",
  onChange: updatepageLink,
  value: props.attributes.pagelink
})));		  
		  
		  
		  
     },
	 save: function(props){
		 
		 return React.createElement("div", {
    class: "Page Card info"
   }, /*#__PURE__*/React.createElement("h2", null, " ", props.attributes.pagetitle), /*#__PURE__*/React.createElement("p", null, props.attributes.pagedescription), /*#__PURE__*/React.createElement("a", {
  href: "{props.attributes.pagelink}"
   }, props.attributes.pagelink));


	  
	 },
	

});
	 
	
	/*
	
	
	
	
   attributes: { // The data this block will be storing

      type: { type: 'string', default: 'default' }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.

      title: { type: 'string' }, // Notice box title in h4 tag

      content: { type: 'array', source: 'children', selector: 'p' } /// Notice box content in p tag

   },

   edit: function(props) {
      
	  // How our block renders in the editor in edit mode

   function updateTitle( event ) {
      props.setAttributes( { title: event.target.value } );
   }

   function updateContent( newdata ) {
      props.setAttributes( { content: newdata } );
   }

   function updateType( event ) {
      props.setAttributes( { type: event.target.value } );
   }

   return el( 'div',
      {
         className: 'notice-box notice-' + props.attributes.type
      },
      el(
         'select',
         {
            onChange: updateType,
            value: props.attributes.type,
         },
         el("option", {value: "default" }, "Default"),
         el("option", {value: "success" }, "Success"),
         el("option", {value: "danger" }, "Danger")
      ),
      el(
         'input',
         {
            type: 'text',
            placeholder: 'Enter title here...',
            value: props.attributes.title,
            onChange: updateTitle,
            style: { width: '100%' }
         }
      ),
      el(
         'input',
         {
            type: 'text',
            placeholder: 'Enter C here...',
            value: props.attributes.title,
            onChange: updateTitle,
            style: { width: '100%' }
         }
      ),
      el(
         wp.editor.RichText,
         {
            tagName: 'p',
            onChange: updateContent,
            value: props.attributes.content,
            placeholder: 'Enter description here...'
         }
      )
   ); // End return
   
   },

   save: function(props) {
      // How our block renders on the frontend

   return el( 'div',
      {
         className: 'notice-box notice-' + props.attributes.type
      },
      el(
         'h4',
         null,
         props.attributes.title
      ),
      el( wp.editor.RichText.Content, {
         tagName: 'p',
         value: props.attributes.content
      })

   ); // End return
   }
});*/