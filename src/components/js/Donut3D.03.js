/**
 * 3d饼状图
 */
import * as d3 from 'd3'
import d3Tip from 'd3-tip'

const Donut3D = {}
function pieTop(d, rx, ry, ir) {
  if (d.endAngle - d.startAngle === 0) {
    return 'M 0 0'
  }
  const sx = rx * Math.cos(d.startAngle)
  const sy = ry * Math.sin(d.startAngle)
  const ex = rx * Math.cos(d.endAngle)
  const ey = ry * Math.sin(d.endAngle)

  const ret = []
  ret.push('M', sx, sy, 'A', rx, ry, '0', (d.endAngle - d.startAngle > Math.PI ? 1 : 0), '1', ex, ey, 'L', ir * ex, ir * ey)
  ret.push('A', ir * rx, ir * ry, '0', (d.endAngle - d.startAngle > Math.PI ? 1 : 0), '0', ir * sx, ir * sy, 'z')
  return ret.join(' ')
}

function pieOuter(d, rx, ry, h) {
  const startAngle = (d.startAngle > Math.PI ? Math.PI : d.startAngle)
  const endAngle = (d.endAngle > Math.PI ? Math.PI : d.endAngle)

  const sx = rx * Math.cos(startAngle)
  const sy = ry * Math.sin(startAngle)
  const ex = rx * Math.cos(endAngle)
  const ey = ry * Math.sin(endAngle)

  const ret = []
  ret.push('M', sx, h + sy, 'A', rx, ry, '0 0 1', ex, h + ey, 'L', ex, ey, 'A', rx, ry, '0 0 0', sx, sy, 'z')
  return ret.join(' ')
}

function pieInner(d, rx, ry, h, ir) {
  const startAngle = (d.startAngle < Math.PI ? Math.PI : d.startAngle)
  const endAngle = (d.endAngle < Math.PI ? Math.PI : d.endAngle)

  const sx = ir * rx * Math.cos(startAngle)
  const sy = ir * ry * Math.sin(startAngle)
  const ex = ir * rx * Math.cos(endAngle)
  const ey = ir * ry * Math.sin(endAngle)

  const ret = []
  ret.push('M', sx, sy, 'A', ir * rx, ir * ry, '0 0 1', ex, ey, 'L', ex, h + ey, 'A', ir * rx, ir * ry, '0 0 0', sx, h + sy, 'z')
  return ret.join(' ')
}

function getPercent(d) {
  // return (d.endAngle - d.startAngle > 0.2 ? Math.round(1000 * (d.endAngle - d.startAngle) / (Math.PI * 2)) / 10 + '%' : '')
  return Math.round(1000 * (d.endAngle - d.startAngle) / (Math.PI * 2)) / 10 + '%'
}
// function getPercentTextPx(d) {
//   const percentText = (d.endAngle - d.startAngle > 0.2
//     ? Math.round(1000 * (d.endAngle - d.startAngle) / (Math.PI * 2)) / 10 + '%' : '')
//   if (percentText) {
//     const ele = document.createElement('span')
//     ele.innerText = percentText
//     //不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
//     ele.style.fontSize = '12px'
//     ele.style.position = 'absolute'
//     ele.style.visibility = 'hidden'
//     //由于父节点的样式会影响子节点，这里可按需添加到指定节点上
//     document.documentElement.append(ele)
//     const result = {
//       width: ele.offsetWidth,
//       height: ele.offsetHeight
//     }
//     document.documentElement.removeChild(ele)
//     // console.log(result)
//     return result
//   } else {
//     return {
//       width: 0,
//       height: 0
//     }
//   }
// }


Donut3D.transition = function (id, data, rx, ry, h, ir) {
  function arcTweenInner(a) {
    const i = d3.interpolate(this._current, a)
    this._current = i(0)
    return function (t) {
      return pieInner(i(t), rx + 0.5, ry + 0.5, h, ir)
    }
  }
  function arcTweenTop(a) {
    const i = d3.interpolate(this._current, a)
    this._current = i(0)
    return function (t) {
      return pieTop(i(t), rx, ry, ir)
    }
  }
  function arcTweenOuter(a) {
    const i = d3.interpolate(this._current, a)
    this._current = i(0)
    return function (t) {
      return pieOuter(i(t), rx - 0.5, ry - 0.5, h)
    }
  }
  // function textTweenX(a) {
  //   const i = d3.interpolate(this._current, a)
  //   this._current = i(0)
  //   return function (t) {
  //     return 0.6 * rx * Math.cos(0.5 * (i(t).startAngle + i(t).endAngle)) - getPercentTextPx(t).width / 2
  //   }
  // }
  // function textTweenY(a) {
  //   const i = d3.interpolate(this._current, a)
  //   this._current = i(0)
  //   return function (t) {
  //     return 0.6 * rx * Math.sin(0.5 * (i(t).startAngle + i(t).endAngle)) + getPercentTextPx(t).height / 2
  //   }
  // }

  const _data = d3.pie().sort(null).value(function (d) {
    return d.value
  })(data)

  d3.select('#' + id).selectAll('.innerSlice').data(_data)
    .transition().duration(750).attrTween('d', arcTweenInner)

  d3.select('#' + id).selectAll('.topSlice').data(_data)
    .transition().duration(750).attrTween('d', arcTweenTop)

  d3.select('#' + id).selectAll('.outerSlice').data(_data)
    .transition().duration(750).attrTween('d', arcTweenOuter)

  // d3.select('#' + id).selectAll('.percent').data(_data).transition().duration(750)
  //   .attrTween('x', textTweenX).attrTween('y', textTweenY).text(getPercent)
}

Donut3D.draw = function (id, data, x /*center x*/, y/*center y*/,
  rx/*radius x*/, ry/*radius y*/, h/*height*/, ir/*inner radius*/) {
  window.d3 = d3
  console.log(d3)
  this.setTip()
  const _this = this
  const _data = d3.pie().sort(null).value(function (d) {
    return d.value
  })(data)

  const slices = d3.select('#' + id).append('g').attr('transform', 'translate(' + x + ',' + y + ')')
    .attr('class', 'slices').attr('filter', 'url(#i1)')

  slices.call(this.tip)

  slices.selectAll('.innerSlice').data(_data).enter().append('path').attr('class', 'innerSlice cursor-pointer')
    .style('fill', function (d) {
      return d3.hsl(d.data.color).darker(0.7)
    })
    .attr('d', function (d) {
      return pieInner(d, rx + 0.5, ry + 0.5, h, ir)
    })
    .each(function (d) {
      this._current = d
    })
    .on('mouseenter', function (d) {
      // show the tooltip on mouse enter
      console.log('mouseenter', d)
      _this.tip.show(d, this)
      d3.select(this).style('opacity', 0.7)
    })
    .on('mouseout', function (d) {
      // hide the tooltip on mouse out
      console.log('mouseout', d)
      _this.tip.hide()
      d3.select(this).style('opacity', 1)
    })

  slices.selectAll('.topSlice').data(_data).enter().append('path').attr('class', 'topSlice cursor-pointer')
    .style('fill', function (d) {
      return d.data.color
    })
    .style('stroke', function (d) {
      return d.data.color
    })
    .attr('d', function (d) {
      return pieTop(d, rx, ry, ir)
    })
    .each(function (d) {
      this._current = d
    })
    .on('mouseenter', function (d) {
      // show the tooltip on mouse enter
      console.log('mouseenter', d)
      _this.tip.show(d, this)
      d3.select(this).style('opacity', 0.7)
    })
    .on('mouseout', function (d) {
      // hide the tooltip on mouse out
      console.log('mouseout', d)
      _this.tip.hide()
      d3.select(this).style('opacity', 1)
    })

  slices.selectAll('.outerSlice').data(_data).enter().append('path').attr('class', 'outerSlice cursor-pointer')
    .style('fill', function (d) {
      return d3.hsl(d.data.color).darker(0.7)
    })
    .attr('d', function (d) {
      return pieOuter(d, rx - 0.5, ry - 0.5, h)
    })
    .each(function (d) {
      this._current = d
    })
    .on('mouseenter', function (d) {
      // show the tooltip on mouse enter
      console.log('mouseenter', d)
      _this.tip.show(d, this)
      d3.select(this).style('opacity', 0.7)
    })
    .on('mouseout', function (d) {
      // hide the tooltip on mouse out
      console.log('mouseout', d)
      _this.tip.hide()
      d3.select(this).style('opacity', 1)
    })

  // slices.selectAll('.percent').data(_data).enter().append('text').attr('class', 'percent')
  //   .attr('x', function (d) {
  //     return 0.6 * rx * Math.cos(0.5 * (d.startAngle + d.endAngle)) - getPercentTextPx(d).width / 2
  //   })
  //   .attr('y', function (d) {
  //     return 0.6 * ry * Math.sin(0.5 * (d.startAngle + d.endAngle)) + getPercentTextPx(d).height / 2
  //   })
  //   .text(getPercent).each(function (d) {
  //     this._current = d
  //   })
}
Donut3D.setTip = function () {
  console.log(d3Tip)
  this.tip = d3Tip()
    .attr('class', 'd3-tip')
    .style('color', 'white')
    .style('background-color', 'rgba(50, 50, 50, 0.7)')
    .style('padding', '5px')
    .style('border-radius', '4px')
    .style('font-size', '14px/21px "Microsoft YaHei"')
    .style('pointer-events', 'none')
    .style('white-space', 'nowrap')
    .offset([-10, 0])
    .html(function (d) {
      const percent = getPercent(d)
      return `<span>占比：${percent}</span>`
    })
}
export default Donut3D
