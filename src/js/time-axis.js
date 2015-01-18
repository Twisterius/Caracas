(function() {
    var explainer = function(scaleGroup, title, code, dateAssumptions, dateProduction, alert) {
        var divisor = 5;
        if (alert) {
            divisor = 6;
            scaleGroup.append('text')
                .attr({
                    'x': 60,
                    'y': (eachScale * 5/divisor),
                    'class': 'alert-text'
                })
                .text(alert);
        }
        scaleGroup.append('text')
            .attr({
                'x': 0,
                'y': eachScale/divisor,
                'class': 'title-text'
            })
            .html(title);
        scaleGroup.append('text')
            .attr({
                'x': 30,
                'y': (eachScale * 2/divisor),
                'class': 'code-text'
            })
            .text(code);
        scaleGroup.append('text')
            .attr({
                'x': 30,
                'y': (eachScale * 3/divisor),
                'class': 'date-text'
            })
            .text(dateAssumptions);
        scaleGroup.append('text')
            .attr({
                'x': 30,
                'y': (eachScale * 4/divisor),
                'class': 'date-text'
            })
            .text(dateProduction);
    };
    var drawScale = function(scale, dst) {
        var axis = d3.svg.axis().scale(scale);
        var scaleGroup = svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (eachScale * i) + ')')
            .call(axis);
        var formatTooltip = d3.time.format('%H:%M');
        scaleGroup.append('rect')
            .attr({
                'x': scale(dst[0]),
                'width': scale(dst[1]) - scale(dst[0]),
                'y': -5,
                'height': 10,
                'fill': '#0A81CB',
                'opacity': 0.75
            });
        scaleGroup.append('circle')
            .attr({
                'cx': scale(dst[2]),
                'cy': 0,
                'r': 8,
                'fill': '#CB1414',
                'opacity': 0.5
            })
            .append('title')
            .text(dst[2].toISOString().slice(11,16) + ' UTC');
        scaleGroup.append('circle')
            .attr({
                'cx': scale(dst[3]),
                'cy': -2,
                'r': 2,
                'fill': '#FFF'
            })
            .append('title')
            .text(dst[3].toISOString().slice(11,16) + ' UTC');
        scaleGroup.append('circle')
            .attr({
                'cx': scale(dst[4]),
                'cy': 2,
                'r': 2,
                'fill': '#08324C'
            })
            .append('title')
            .text(dst[4].toISOString().slice(11,16) + ' UTC');
        return scaleGroup;
    };
    var margin = {top: 10, right: 30, bottom: 0, left: 30};
    var width = 1800 - margin.left - margin.right;
    var height = 30 - margin.top - margin.bottom;
    var eachScale = 180;
    var i = 0;
    var thisScale;
    var svg = d3.select('body')
        .append('svg')
        .attr({
            'width': width + margin.left + margin.right,
            'height': height + margin.top + margin.bottom
        })
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // #4: D3's suggested solution for the JavaScript Date constructor problem + Watson
    var timeFormat2 = d3.time.format('%Y-%m-%dT%H:%M:%S%Z');
    var d3ParseScale2 = d3.time.scale.utc()
        .domain([timeFormat2.parse('2014-03-08T12:00:00+0000'), timeFormat2.parse('2014-03-10T00:00:00+0000')])
        .range([0, width]);
    explainer(drawScale(d3ParseScale2,
        [ timeFormat2.parse('2014-03-09T00:00:00+0000'), timeFormat2.parse('2014-03-10T00:00:00+0000'),
        timeFormat2.parse('2014-03-09T03:00:00+0000'), timeFormat2.parse('2014-03-09T02:30:00+0000'),
        timeFormat2.parse('2014-03-09T01:30:00+0000')
        ]),'');
}());
