 
Highcharts.chart('semipie1', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  // title: {
  //   text: 'Data',
  //   align: 'center',
  //   verticalAlign: 'middle',
  //   y: 40
  // },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        // distance: -50,
        style: {
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90
      // center: ['50%', '75%']
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Chrome', 58.9],
      ['Firefox', 13.29],
      ['Internet Explorer', 13],
      ['Edge', 3.78],
      ['Safari', 3.42],
      {
        name: 'Other',
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});
Highcharts.chart('semipie2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        style: {
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Chrome', 58.9],
      ['Firefox', 13.29],
      ['Internet Explorer', 13],
      ['Edge', 3.78],
      ['Safari', 3.42],
      {
        name: 'Other',
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});
Highcharts.chart('semipie3', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        style: {
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Chrome', 58.9],
      ['Firefox', 13.29],
      ['Internet Explorer', 13],
      ['Edge', 3.78],
      ['Safari', 3.42],
      {
        name: 'Other',
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});
Highcharts.chart('semipie4', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        style: {
          color: 'white'
        }
      },
      startAngle: -90,
      endAngle: 90
    }
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    innerSize: '50%',
    data: [
      ['Chrome', 58.9],
      ['Firefox', 13.29],
      ['Internet Explorer', 13],
      ['Edge', 3.78],
      ['Safari', 3.42],
      {
        name: 'Other',
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }
    ]
  }]
});



Highcharts.chart('container0', {

  title: {
    text: 'Chart Title'
  },

 

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});

Highcharts.chart('container1', {

  title: {
    text: 'Chart Title'
  },

 

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});




