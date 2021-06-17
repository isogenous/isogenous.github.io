---
layout: page
title: 'Annotated Time War'
subtitle:
use-site-title: true
---

This is very much a work in progress. If I've missed anything, or if you want to help out, let me know through either filing an <a href="https://github.com/isogenous/isogenous.github.io/issues">issue</a>, a <a href="https://github.com/isogenous/isogenous.github.io/pulls">PR</a> or drop me an email at oiuoyt@gmail.com

{% for chapter in site.data.chapter_title %}

<h3 class="chapter-title">{{ chapter["title"] }}</h3>

{% for row in site.data.references %}
{%  if row["chapter"] == chapter["chapter"] %}
<div class=quote>"{{ row["quote"] }}"</div>
<div class=reference>{{ row["reference"] }}</div>
<div class=notes>{{ row["note"] }} </div>
{% endif %}
{% endfor %}

{% endfor %}
