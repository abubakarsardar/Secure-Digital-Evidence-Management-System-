import React, { useState } from 'react';
import './RBAC-CARD.css';
import { NavLink } from 'react-router-dom';

export default function CardSlider() {

  return (
    <div className=" RBAC-card flex flex-row items-center p-8">
      <div className="relative w-[1000px] overflow-hidden">
            <div className="card-RBAC w-[300px] h-[500px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 text-center">
              <img src='./img/JUDGES.jpg' className="w-100 h-100 mb-4" />
              <h2 className="text-2xl font-bold mb-4 titl"> <NavLink to = "/RBAC/JUDGES" >JUDGES</NavLink> </h2>
              <p className="text-gray-600 ">ACCESS AND REVIEW DIGITAL EVIDENCE</p>
            </div>
      </div>

      <div className="relative w-[1000px] overflow-hidden">
            <div className="card-RBAC w-[300px] h-[500px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 text-center">
              <img src='./img/INVSTIGATORS.jpg' className="w-100 h-100 mb-4" />
              <h2 className="text-2xl font-bold mb-4 titl"> <NavLink to = "/RBAC/investigation" >INVESTIGATORS</NavLink> </h2>
              <p className="text-gray-600 ">UPLOAD AND MANAGE FORENSIC FILES</p>
            </div>
      </div>

      <div className="relative w-[1000px] overflow-hidden">
            <div className="card-RBAC w-[300px] h-[500px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 text-center">
              <img src='./img/ADMIN.jpg' className="w-100 h-100 mb-4" />
              <h2 className="text-2xl font-bold mb-4 titl"> <NavLink to = "/" >COURT ADMINISTRATORS</NavLink> </h2>
              <p className="text-gray-600 ">MANAGE USER ROLES SECURITY</p>
            </div>
      </div>

      <div className="relative w-[1000px] overflow-hidden">
            <div className="card-RBAC w-[300px] h-[500px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center p-6 text-center">
              <img src='./img/SECURITY.jpg' className="w-100 h-100 mb-4" />
              <h2 className="text-2xl font-bold mb-4 titl"> <NavLink to = "/" >IT SECURITY TEAM</NavLink> </h2>
              <p className="text-gray-600 ">ACCESS AND REVIEW DIGITAL EVIDENCE</p>
            </div>
      </div>


    </div>
  );
}
