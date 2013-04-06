---
layout: default
title: II-Matto
abstract: Pensiero Realizzare.
---

<link rel="stylesheet" href="../css/index.css" />

<div id="abstract-wrapper">
	{% for post in site.categories.notes %}
	<article>
		<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
		<p class="abstract">{{ post.abstract }}</p>
	</article>
	{% endfor %}
</div>

<!--
<div id="category-wrapper">
	<ul id="category-list">
		{% for category in site %}
		<li><h3>{{ category.name }}</h3></li>
		{% endfor %}
	</ul>
</div>
-->