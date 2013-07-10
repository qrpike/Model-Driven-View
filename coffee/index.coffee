


#define [ 'EventEmitter','WatchJS','RAF' ], ( EventEmitter, WatchJS, RAF ) ->



	###
	
		Model Driven View / Data Driven Template(s)
		
		https://github.com/qrpike/Model-Driven-View
		
		This is to help front end developers, define views with objects and templates
		and the view automatically re-render that view if the data inside of it changes.
		
		There are probably a few out there that do this, but this class uses Request Animation Frame
		to re-render all changes on a animation frame, so changing 5 attributes at once, wont trigger
		5 renders, it will trigger a render on the next animation frame. This speeds up rendering and 
		cuts back on un-needed renders dramatically.
		
		Created by: Quinton Pike
		Email: qrpike@gmail.com
	
	###
	class ModelDrivenView extends EventEmitter
		
		
		
		
		###
		
			Constructor for auto-rendering element:
			
			@param {Object} dataObject - Data which we are going to watch for changes, this is also passed into the template function.
			@param {Function} template - Template function which renders the HTML form the @dataObject
			@param {Object} container - DOM Element where this template is to render inside of. 
			@param {Object} options - Options we want to change from default settings.
			
		###
		constructor: ( @dataObject, @template, @container, @options = {} )->
			
			# Whether to automatically render on data changes:
			@autoRender = @options.autoRender || true
			@append		= @options.appendOnInitialRender || true
			@renderOnInit	= @options.renderOnInit || true
			@el = null
			
			# If we are to auto-render the data, create watchers:
			@createWatcher() if @autoRender 
			
			# Render the element:
			@initialRender() if @renderOnInit
			
			# Render on animation frame points:
			@needToRender = false 
		
		
		# Create the Watches:
		createWatcher: =>
			# Watch the @dataObject for any and all changes.
			if @options.watchAttributes?
				# If we have set specific attributes to watch, only watch those:
				WatchJS.watch @dataObject, @options.watchAttributes, nder
			else
				# Otherwise listen for all changes
				WatchJS.watch @dataObject, @render
				
				
				 
		### 
			If something changes, we set @needToRender = true.
			The way we trigger a render is to just set this to TRUE. Once
			we set this to true, next frame refresh on the browser it will render. 
			This helps align the renders with the browsers refresh = better performance.
		###
		render: =>
			@needToRender = true 
		
		
		
		
		# Re Render the HTML
		reRender: =>
			# Only trigger a rendering if we are set to needToRender = true
			if @needToRender
				console.log 'Rendering...'
				newEle = @getHTML()
				# Replace the old template with the new rendered HTML.
				@el.replaceWith newEle
				@el = newEle
				# Emit a event for other things to do their events:
				@emit 'render', { el : @el, rerender: true }
				# Set the needToRender to false since we are all done now.
				@needToRender = false 
			
			###
				Loop this function every animation requested. Only do something when 
				we actually need to render something again.
			###
			window.requestAnimFrame @reRender
			 
			 
			 
		
		# Generate the HTML from the specified template function:
		getHTML: ( jQueryObject = true )=>
			# Return it as a jQuery object:
			if jQueryObject
				$( @template( @dataObject ) )
			# Otherwise, just pass back the HTML:
			else
				@template( @dataObject )
		
		
		
		
		# Render HTML
		initialRender: =>
			# Set the @el to the templated HTML jQuery object:
			@el = @getHTML()
			# If we need to append the initial rendering to the container:
			if @append is true
				@container.append( @el )
			# Otherwise we just replace the container contents with the new HTML:
			else
				@container.html( @el )
			# Emit event.
			@emit 'render', { el : @el, rerender: false }
			# Kick off the Request Animation Frame Loop:
			@reRender() 



