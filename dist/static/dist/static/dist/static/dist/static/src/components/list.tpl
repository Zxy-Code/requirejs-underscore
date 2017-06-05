<% _.each(data.data.data, function (item) { %>
    <div class="list">
        <a class="book" href="<%= item.url %>">
            <div class="listCover">
                <!-- <div class="serial ser_{{item.serial}}" v-if="serial" >{{item.serial}}</div> -->
                <img src="<%= item.coverUrl %>" alt="封面">
            </div>
            <div class="listCon">
                <h2><%= item.title %></h2>
                <span class="price"><%= item.price %> 元起</span>
                <span class="wantNum"><%= item.num %>人想看</span>
                <h3>导演：<%= item.director %></h3>
                <h4>主演：<%= item.starring %></h4>
            </div>
        </a>

        <% if(data.data.inf == 'index-list'){ %>
                <%if(!item.iLike){ %>
                    <div class="iLike"></div>
                <% } else {%>
                    <div class="iLike active"></div>
                <% } %>
        <% } %>

        <% if(data.data.inf == 'rank'){ %>
            <div class="sort">
                <span><%= item.sort %></span>
            </div>
        <% } %>
        <!-- <div class="bookType">
            <a v-for="i in type | limitBy 2" href="{{item.cate_url}}">{{i}}</a>
        </div> -->
    </div>
<% }) %>