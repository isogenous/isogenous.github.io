---
layout: page
title: 'Annotated Time War'
subtitle:
use-site-title: true
---
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
