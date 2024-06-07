import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import ZingchartAngular from 'zingchart-angular/zingchart';
import * as Aos from 'aos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private title: Title) {
    this.title.setTitle('Dashboard');
  }
  // Sales Analysis Chart
  salesAnalysisConfig: ZingchartAngular.graphset = {
    type: 'area',
    series: [
      {
        values: [0, 120, -180, 0, 200, -100, 120, 200, 6],
        backgroundColor: 'rgba(0, 163, 162, 0.4)',
        lineWidth: 0,
        marker: {
          'background-color': '#ffffff',
          'border-color': '#00A3A2',
          'border-width': 1,
        },
      },
      {
        values: [200, -300, 100, -100, -350, 300, 0, 0, 200],
        backgroundColor: 'rgba(255, 99, 88, 0.4)',
        lineWidth: 0,
        marker: {
          'background-color': '#ffffff',
          'border-color': '#FF6358',
          'border-width': 1,
        },
      },
    ],
    'scale-x': {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Auguest',
      ],
      guide: {},
      item: {
        fontSize: 14,
        color: '666666',
        fontFamily: "'Poppins', sans-serif",
      },
      'line-color': '#D5D5D5',
      tick: {
        lineWidth: 0,
      },
    },
    plot: {
      aspect: 'spline',
      animation: {
        effect: 2,
        speed: 400,
        delay: 10,
        method: 5,
      },
    },
    plotarea: {
      margin: 'dynamic',
    },
    'scale-y': {
      tick: {
        lineWidth: 0,
      },
      item: {
        fontSize: 14,
        color: '666666',
        fontFamily: "'Poppins', sans-serif",
      },
      'line-color': '#D5D5D5',
    },
  };

  // Total Earning Chart
  totalEarningConfig: ZingchartAngular.graphset = {
    type: 'area',
    plot: {
      aspect: 'spline',
      animation: {
        effect: 2,
        speed: 400,
        delay: 10,
        method: 5,
      },
    },
    scaleX: {
      visible: false,
    },
    scaleY: {
      visible: false,
    },
    series: [
      {
        values: [100, 20, 100, 40, 60, 55, 90, 10],
        backgroundColor: '#F64E60 #fff',
        lineWidth: 2,
        lineColor: '#F64E60',
        marker: {
          visible: false,
        },
      },
    ],
    plotarea: {
      margin: 'dynamic',
    },
  };

  // Total Order Chart
  totalOrderConfig: ZingchartAngular.graphset = {
    type: 'area',
    plot: {
      aspect: 'spline',
      animation: {
        effect: 2,
        speed: 400,
        delay: 10,
        method: 5,
      },
    },
    scaleX: {
      visible: false,
    },
    scaleY: {
      visible: false,
    },
    series: [
      {
        values: [100, 20, 100, 40, 60, 55, 90, 10],
        backgroundColor: '#1BC5BD #fff',
        lineWidth: 2,
        lineColor: '#1CC6BE',
        marker: {
          visible: false,
        },
      },
    ],
    plotarea: {
      margin: 'dynamic',
    },
  };
  ngOnInit() {
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
  }
}
