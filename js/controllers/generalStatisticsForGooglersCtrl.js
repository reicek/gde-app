<form class="stats dateRange">
	<h2>Show activities since:</h2>
	<select	ng-model="monthSelected"	ng-options="month.value for month in months"	ng-change="dateFilter()" required>
		<option	value="">
			-Select month-
		</option>
	</select>
	<select ng-model="yearSelected"		ng-options="year.value for year in years"		ng-change="dateFilter()" required>
		<option value="">
			-Select year-
		</option>
	</select>
	<paper-shadow z="1"></paper-shadow>
</form>
<div class="stats forGooglers">
	<h1>General Statistics by GDE</h1>
	<h5><i>since {{monthSince}}/{{yearSince}}</i></h5>
	<div class="gdesGeneralStats" id="generalStatisticsByGDE">
		<div>
			<div id="gdeSelector" class="gdeSelector"></div>
			<br/>
			<div id="activitiesSlider" class="activitiesSlider"></div>
			<br/>
			<div id="resharesSlider" class="resharesSlider"></div>
			<br/>
			<div id="plus1sSlider" class="plus1sSlider"></div>
			<br/>
			<div id="commentsSlider" class="commentsSlider"></div>
		</div>
		<div id="gdeTableChart"></div>
		<div id="gdePieChart"></div>
	</div>
	<paper-shadow z="1"></paper-shadow>
</div>
<div class="stats forGooglers">
	<h1>Most popular activities</h1>
	<h5><i>since {{monthSince}}/{{yearSince}}</i></h5>
	<div class="top100activities" id="top100activities">
		<h1>Very soon!</h1>
	</div>
	<paper-shadow z="1"></paper-shadow>
</div>
<div class="stats forGooglers">
	<h1>General Statistics by Product</h1>
	<h5><i>since {{monthSince}}/{{yearSince}}</i></h5>
	<div class="gdesGeneralStats" id="generalStatisticsByPlatform">
		<div>
			<div id="platformsSelector" class="platformsSelector"></div>
			<br/>
			<div id="platformsActivitiesSlider" class="platformsActivitiesSlider"></div>
			<br/>
			<div id="platformsResharesSlider" class="platformsResharesSlider"></div>
			<br/>
			<div id="platformsPlus1sSlider" class="platformsPlus1sSlider"></div>
			<br/>
			<div id="platformsCommentsSlider" class="platformsCommentsSlider"></div>
		</div>
		<div id="platformsTableChart"></div>
		<div id="platformsBarChart"></div>
	</div>
	<paper-shadow z="1"></paper-shadow>
</div>
<div class="stats forGooglers">
	<h1>General Statistics by Activity</h1>
	<h5><i>since {{monthSince}}/{{yearSince}}</i></h5>
	<div class="gdesGeneralStats" id="generalStatisticsByActivity">
		<div>
			<div id="activities_Selector" class="activities_Selector"></div>
			<br/>
			<div id="activities_ActivitiesSlider" class="activities_ActivitiesSlider"></div>
			<br/>
			<div id="activities_ResharesSlider" class="activities_ResharesSlider"></div>
			<br/>
			<div id="activities_Plus1sSlider" class="activities_Plus1sSlider"></div>
			<br/>
			<div id="activities_CommentsSlider" class="activities_CommentsSlider"></div>
		</div>
		<div id="activityTableChart"></div>
		<div id="activityBarChart"></div>
	</div>
	<paper-shadow z="1"></paper-shadow>
</div>
<!-- Bug
<div class="stats forGooglers">
	<h1>General Statistics by Region</h1>
	<h5><i>since {{monthSince}}/{{yearSince}}</i></h5>
	<div class="gdesGeneralStats" id="generalStatisticsByRegion">
		<div>
			<div id="region_Selector" class="region_Selector"></div>
			<br/>
			<div id="region_ActivitiesSlider" class="region_ActivitiesSlider"></div>
			<br/>
			<div id="region_ResharesSlider" class="region_ResharesSlider"></div>
			<br/>
			<div id="region_Plus1sSlider" class="region_Plus1sSlider"></div>
			<br/>
			<div id="region_CommentsSlider" class="region_CommentsSlider"></div>
		</div>
		<div id="regionTableChart"></div>
		<div id="regionBarChart"></div>
	</div>
	<paper-shadow z="1"></paper-shadow>
</div>
-->
</br>
<a href="#/">
	<paper-icon-button icon="arrow-back" label="map"></paper-icon-button>
</a>
<script src="js/googleUniversalAnalytics.js"></script>
