import React, { useState, useEffect, useContext, useRef } from 'react';
import { ProductContext } from '../pages/oniContext';
import { Container, Badge } from 'reactstrap';
import {
  Subtitle,
  Description,
  Titlespan2,
} from '../components/common/title/index';
import { total } from '../components/total';
export const FinalQuote = () => {
  const { hours, setTotal,total,activeAddOns,addOnTotal,packageTotal,activeNumAddOns,addOns } = useContext(ProductContext);
  const prevCountRef = useRef();
  



  return (
    <section className="testimonial-wrapper gradient-color" id="testimonial">
      <Container>
        <div className="main-title-wrapper">
          <Subtitle Class="site-subtitle gradient-color" Name="Your Quote" />
          <Titlespan2
            Class="sitemain-subtitle"
            Name={`$${Math.round(packageTotal + addOnTotal)}`}
          />
          <Description
            Class="site-dec"
            Name="The Shown Price is only an estimate and may increase or decrease based on demand and extent of work"
          />
          {addOns.map((service, index) => (
            <Badge color="info" id={index} pill>
              {service}
            </Badge>
          ))}
          {activeNumAddOns.map((service, index) => (
            <Badge color="info" id={index} pill>
              ({service.count}){service.title}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
};
