lib('protovis-bundle.js');

elem = document.createElement('g');
elem.setAttribute('id','canvas');
document.lastChild.appendChild(elem);

var render_ProductLineChart = {
	type: "cccLineChart",
	name: "render_ProductLineChart",
	priority: "5",
	chartDefinition: {
		dataAccessId: "QueryProductLines",
path: "/cdt/cdt0001/dash0001_tmp.cda",
		width: 940,
		height: 300,
		extensionPoints: [["dot_fillStyle","#ffffff"],["dot_shapeRadius","3"],["dot_lineWidth","2"],["line_lineWidth","2"],["baseAxisTicks_strokeStyle","#d8d8d8"],["baseAxisEndLine_strokeStyle","#d8d8d8"],["orthoAxisEndLine_strokeStyle","#d8d8d8"],["baseAxisRule_strokeStyle","#d8d8d8"],["orthoAxisRule_strokeStyle","#d8d8d8"],["baseAxisGrid_strokeStyle","#d8d8d8"],["orthoAxisGrid_strokeStyle","#d8d8d8"],["baseAxisLabel_font","12px sans-serif"],["orthoAxisLabel_font","12px sans-serif"],["plotFrame_strokeStyle","#d8d8d8"]],
		colors: [],
		animate: true,
		baseAxisDomainRoundMode: "tick",
		baseAxisDomainScope: "global",
		baseAxisGrid: false,
		baseAxisMinorTicks: true,
		baseAxisOffset: 0,
		baseAxisOverlappedLabelsMode: "hide",
		baseAxisTicks: true,
		baseAxisTitleFont: "12px sans-serif",
		baseAxisTitleMargins: "0",
		baseAxisVisible: true,
		baseAxisZeroLine: true,
		clearSelectionMode: "emptySpaceClick",
		clickable: false,
		color2AxisColors: [],
		color2AxisLegendClickMode: "toggleVisible",
		color2AxisLegendVisible: true,
		compatVersion: 2,
		contentMargins: "0",
		contentPaddings: "0",
		crosstabMode: true,
		ctrlSelectMode: true,
		dataIgnoreMetadataLabels: false,
		dataMeasuresInColumns: false,
		dataSeparator: "~",
		dotsVisible: true,
		groupedLabelSep: " ~ ",
		hoverable: false,
		ignoreNulls: true,
		isMultiValued: false,
		leafContentOverflow: "auto",
		legend: true,
		legendClickMode: "toggleVisible",
		legendDrawLine: true,
		legendFont: "10px sans-serif",
		legendItemPadding: 2.5,
		legendMargins: "0",
		legendMarkerSize: 15,
		legendPaddings: "5",
		legendPosition: "top",
		legendTextMargin: 6,
		legendVisible: true,
		margins: "3",
		measuresIndexes: [],
		multiChartColumnsMax: 3,
		multiChartIndexes: [],
		multiChartSingleColFillsHeight: true,
		multiChartSingleRowFillsHeight: true,
		nullInterpolationMode: "none",
		orientation: "vertical",
		ortho2AxisDomainRoundMode: "tick",
		ortho2AxisDomainScope: "global",
		ortho2AxisGrid: false,
		ortho2AxisMinorTicks: true,
		ortho2AxisOffset: 0,
		ortho2AxisOverlappedLabelsMode: "hide",
		ortho2AxisTicks: true,
		ortho2AxisTitleFont: "12px sans-serif",
		ortho2AxisTitleMargins: "0",
		ortho2AxisVisible: true,
		ortho2AxisZeroLine: true,
		orthoAxisDomainRoundMode: "nice",
		orthoAxisDomainScope: "global",
		orthoAxisGrid: true,
		orthoAxisMinorTicks: false,
		orthoAxisOffset: 0,
		orthoAxisOverlappedLabelsMode: "hide",
		orthoAxisTicks: false,
		orthoAxisTitleFont: "12px sans-serif",
		orthoAxisVisible: false,
		orthoAxisZeroLine: true,
		paddings: "0",
		plot2: false,
		plot2AreasVisible: false,
		plot2ColorAxis: 2,
		plot2DotsVisible: true,
		plot2LinesVisible: true,
		plot2NullInterpolationMode: "none",
		plot2OrthoAxis: 1,
		plot2Series: [],
		plot2SeriesIndexes: -1,
		plot2Stacked: false,
		plot2ValuesFont: "10px sans-serif",
		plot2ValuesMask: "{value}",
		plot2ValuesVisible: false,
		plotFrameVisible: false,
		selectable: false,
		seriesInRows: false,
		smallContentMargins: "0",
		smallContentPaddings: "0",
		smallMargins: "2%",
		smallPaddings: "0",
		smallTitleFont: "14px sans-serif",
		smallTitleMargins: "0",
		smallTitlePaddings: "0",
		smallTitlePosition: "top",
		timeSeries: false,
		timeSeriesFormat: "%Y-%m-%d",
		titleFont: "14px sans-serif",
		titleMargins: "0",
		titlePaddings: "0",
		titlePosition: "top",
		tooltipEnabled: true,
		tooltipFade: true,
		tooltipFollowMouse: false,
		tooltipHtml: true,
		tooltipOpacity: 0.9,
		trendAreasVisible: false,
		trendColorAxis: 2,
		trendDotsVisible: false,
		trendLinesVisible: true,
		trendOrthoAxis: 1,
		trendStacked: false,
		trendValuesAnchor: "right",
		trendValuesFont: "10px sans-serif",
		trendValuesVisible: false,
		valuesFont: "10px sans-serif"
	},
	parameters: [["DateParameterMDXYear","DateParameterMDXYear"],["DateParameterMDXMonth","DateParameterMDXMonth"],["StatusParameter","StatusParameter"],["TerritoryParameter","TerritoryParameter"]],
	executeAtStart: true,
	htmlObject: "${p:Window01Chart}",
	preExecution: function f(){
    DateParameterMDXYear  = returnMDXPart('year' ,DateParameter);
    DateParameterMDXMonth = returnMDXPart('month',DateParameter);
    
    StatusParameter     = (StatusParameter==null || StatusParameter=="") ? "[Order Status].[NOTHING]" : StatusParameter ;
    TerritoryParameter  = (TerritoryParameter==null||TerritoryParameter=="" ) ? "[Markets].[NOTHING]" : TerritoryParameter ;
    
    
},
	listeners: ['${p:StatusParameter}','${p:TerritoryParameter}','${p:DateParameter}']

};
var datasource = datasourceFactory.createDatasource('cda');
datasource.setDefinitionFile(render_ProductLineChart.chartDefinition.path);
datasource.setDataAccessId('QueryProductLines');

var paramDateParameterMDXYear = params.get('DateParameterMDXYear');
paramDateParameterMDXYear = (paramDateParameterMDXYear !== null && paramDateParameterMDXYear !== '')? paramDateParameterMDXYear : '2005';
datasource.setParameter('DateParameterMDXYear', paramDateParameterMDXYear);
var paramDateParameterMDXMonth = params.get('DateParameterMDXMonth');
paramDateParameterMDXMonth = (paramDateParameterMDXMonth !== null && paramDateParameterMDXMonth !== '')? paramDateParameterMDXMonth : '0';
datasource.setParameter('DateParameterMDXMonth', paramDateParameterMDXMonth);
var paramStatusParameter = params.get('StatusParameter');
paramStatusParameter = (paramStatusParameter !== null && paramStatusParameter !== '')? paramStatusParameter : '[Order Status].[All Status Types]';
datasource.setParameter('StatusParameter', paramStatusParameter);
var paramTerritoryParameter = params.get('TerritoryParameter');
paramTerritoryParameter = (paramTerritoryParameter !== null && paramTerritoryParameter !== '')? paramTerritoryParameter : '[Markets].[All Markets]';
datasource.setParameter('TerritoryParameter', paramTerritoryParameter);
var data = eval('new Object(' + String(datasource.execute()) + ');');
var w = parseInt(params.get('width')) || render_ProductLineChart.chartDefinition.width;
var h = parseInt(params.get('height')) || render_ProductLineChart.chartDefinition.height;
render_ProductLineChart.chartDefinition.width = w;
 render_ProductLineChart.chartDefinition.height = h;
print( 'Width: ' + w +  ' ( ' + typeof w + ' ) ; Height: ' + h +' ( ' + typeof h +' )');
bg = document.createElementNS('http://www.w3.org/2000/svg','rect');
bg.setAttribute('id','foo');
bg.setAttribute('x','0');
bg.setAttribute('y','0');
bg.setAttribute('width', w);
bg.setAttribute('height',h);
bg.setAttribute('style', 'fill:white');
document.lastChild.appendChild(bg);
renderCccFromComponent(render_ProductLineChart, data);
document.lastChild.setAttribute('width', render_ProductLineChart.chartDefinition.width);
document.lastChild.setAttribute('height', render_ProductLineChart.chartDefinition.height);