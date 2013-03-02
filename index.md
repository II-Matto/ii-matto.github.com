---
layout: index
title: Test Index
description: This is a test.
---

<ul>
	{% for post in site.categories.test %}
	<li>
	    <h2>
		<a href="{{ post.url }}">{{ post.title }}</a>
	    </h2>
	    <span>{{ post.description }}</span>
	</li>
	{% endfor %}
</ul>