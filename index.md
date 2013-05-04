---
layout: default
title: II-Matto
abstract: Pensiero Realizzare.
---

<link rel="stylesheet" href="/css/index.css" />
<link rel="stylesheet" href="/css/font-face.css" />

<div id="abstract-wrapper">
	{% for post in site.categories.notes %}
	<article>
		<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
		<p>{{ post.date| date: "%Y-%m-%d" }}</p>
		<div class="tag-wrapper">
			<span>标签：</span>
			<ul class="tag-list">
				{% for tag in post.tags %}
				<li><a href="">{{ tag }}</a></li>
				{% endfor %}
			</ul>
		</div>
		<section class="abstract">{{ post.abstract }}</section>
	</article>
	{% endfor %}
</div>
