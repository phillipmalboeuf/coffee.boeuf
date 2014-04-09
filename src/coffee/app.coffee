window.App =
	Collections:{}
	Models:{}
	Views:{}
	Routers:{}




	init: ->





	scrollTo: (to=0, duration=500)->
		to = Math.floor to
		from = window.pageYOffset
		timelapsed = 0
		distance = to - from

		stopAnimation = ->
			current = window.pageYOffset

			if (current == to || ((window.innerHeight + current) >= document.body.scrollHeight))
				clearInterval(runAnimation)


		animateScroll = ->
			timelapsed += 16
			percentage = (timelapsed / duration)
			percentage = if percentage > 1 then 1 else percentage

			position = from + (distance * (percentage * (2 - percentage)))

			window.scrollTo 0, position
			stopAnimation()

		runAnimation = setInterval(animateScroll, 16)








App = window.App
_ = window._
Backbone = window.Backbone





$ ->
	App.init()

