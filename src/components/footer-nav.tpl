	<div class="footer-nav">
		<% if(data.data === 'movies'){ %>
		<a class="movies" href="../html/index.html">
			<i class="icon active"></i>
			<span class="active">电影</span>
		</a>
		<a class="sort" href="../html/rank.html"><i class="icon"></i><span>榜单</span></a>
		<a class="mine" href="../html/myzone.html"><i class="icon"></i><span>我的</span></a>
		<% } else if(data.data === 'sort') { %>
			<a class="movies" href="../html/index.html">
				<i class="icon"></i>
				<span>电影</span>
			</a>
			<a class="sort" href="../html/rank.html"><i class="icon active"></i><span class="active">榜单</span></a>
			<a class="mine" href="../html/myzone.html"><i class="icon"></i><span>我的</span></a>
		<% } else if(data.data === 'myzone') { %>
			<a class="movies" href="../html/index.html">
				<i class="icon"></i>
				<span>电影</span>
			</a>
			<a class="sort" href="../html/rank.html"><i class="icon"></i><span>榜单</span></a>
			<a class="mine" href="../html/myzone.html"><i class="icon active"></i><span class="active">我的</span></a>
		<% } %>
	</div>
