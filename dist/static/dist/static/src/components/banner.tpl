<div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
            <a href="{{item.url}}">
                <img :src="item.banner" width="100%">
            </a>
        </div> -->
        <% _.each(data, function(item){ %>
        	<div class="swiper-slide">
	            <a href="<%= item.url %>">
	                <img src="<%= item.banner %>" width="100%">
	            </a>
	        </div>
        <% }) %>
    </div>
    <div class="swiper-pagination"></div>
</div>