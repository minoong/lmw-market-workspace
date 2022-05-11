import React, { useEffect, useRef, useState } from 'react'
import { select } from 'd3'
import styled from '@emotion/styled'

const DivStyle = styled.div`
 background-color: hotpink;
 font-size: 24px;
 border-radius: 4px;
 padding: 32px;
 text-align: center;
 &:hover {
  color: white;
 }
`

function App() {
 const svgRef = useRef<SVGSVGElement | null>(null)
 const [data] = useState([5, 20, 25, 30, 40])

 useEffect(() => {
  const svg = select(svgRef.current)

  svg
   .selectAll('circle')
   .data(data)
   .join((enter) => enter.append('circle'))
   .attr('r', (value) => value)
   .attr('cx', (value) => value * 2)
   .attr('cy', (value) => value * 2)
   .attr('stroke', 'red')
 }, [data])

 return (
  <div className="bg-slate-600 p-10">
   <svg ref={svgRef} />
   <DivStyle>Hover to change color.</DivStyle>
   <div className="text-red-600">red</div>
  </div>
 )
}

export default App
