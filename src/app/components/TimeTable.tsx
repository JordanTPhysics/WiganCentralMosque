"use client";

import React, { useEffect, useState } from "react";
import TimeSeriesChart from "./TimeSeriesChart";

function parseCSV(csvData: string): SalaahTime[] {
  // Split the CSV data into rows
  var rows = csvData.split("\n");

  // Extract headers from the first row
  var headers = rows[0].split(",");

  // Initialize an array to store the parsed data
  var result = [];

  for (var i = 1; i < rows.length; i++) {
    let values = rows[i].split(",");
    let rowObject: SalaahTime = { Date: "", Fajr: "", Dhuhr: "", Asr: "", Maghrib: "", Isha: "" };

    for (var j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = values[j];
    }

    result.push(rowObject);
  }

  return result;
}

export type SalaahTime = {
  Date: string;
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string; // Add index signature
};

const TimeTable = () => {
  const [salaahTimes, setSalaahTimes] = useState<SalaahTime[]>([]);
  const [todaySalaahTimes, setTodaySalaahTimes] = useState<SalaahTime>({ Date: "", Fajr: "", Dhuhr: "", Asr: "", Maghrib: "", Isha: "" });
  const listClassName = "navigation-menu flex flex-wrap flex-grow justify-center lg:m-3 sm:m-1 md:m-2 md:col-span-5 lg:col-span-5 sm:col-span-1 sm:row-span-1";

  useEffect(() => {
    const fetchSalaahTimes = async () => {
      try {
        const response = await fetch("/resources/TimeTable.csv");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.text();
        const parsedData = parseCSV(data);
        setSalaahTimes(parsedData);
      } catch (error) {
        console.error("Error fetching or parsing CSV file:", error);
      }
    };
    fetchSalaahTimes();
  }, []);

  useEffect(() => {
    const today = new Date();

    // Get day, month, and year components
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = today.getFullYear();

    // Ensure day and month are formatted as two digits
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Create the formatted date string
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
    const todaySalaahTimes = salaahTimes?.find(entry => entry.Date === formattedDate) ?? null;

    setTodaySalaahTimes(todaySalaahTimes as SalaahTime);
  }, [salaahTimes]);



  return (
    <div className="bg-primary/90 rounded-sm w-screen p-4 mt-4 mb-4">

      <div>
      <h1 className="text-5xl text-heading">Time Table</h1>

        <h2 className="text-3xl text-center text-menu">Salaah Times for {new Date().toLocaleDateString()}</h2>
        <br />
        {todaySalaahTimes ? (
          <ul className="navigation-menu text-menu">
            <li>Fajr: {todaySalaahTimes.Fajr}</li>
            <li>Dhuhr: {todaySalaahTimes.Dhuhr}</li>
            <li>Asr: {todaySalaahTimes.Asr}</li>
            <li>Maghrib: {todaySalaahTimes.Maghrib}</li>
            <li>Isha: {todaySalaahTimes.Isha}</li>
          </ul>
        ) : (
          <ul>
            <li className="text-menu">Loading...</li>
          </ul>
        )}
      </div>
      <br />
      <div >
        <h2 className="text-3xl justify text-menu">Timetable downloads</h2> <br />
        <ul className={listClassName}>
          <li></li>
          <li>
            <a href="/resources/TimeTable.csv"
              download
              className="text-heading lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm lg:p-3 md:p-2 sm:p-1 mx-2 custom-link text-nowrap transition-all">
              Download CSV
            </a>
          </li>
          <li>
            <a href="/resources/Jan_Jun_2024_Times_monthly.pdf"
              download
              className="text-heading lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm lg:p-3 md:p-2 sm:p-1 mx-2 custom-link text-nowrap transition-all">
              January - June
            </a>
          </li>
          <li>
            <a href="/resources/Jul_Dec_2024_Times_monthly.pdf"
              download
              className="text-heading lg:bg-secondary md:bg-secondary lg:rounded-lg sm:rounded-sm lg:p-3 md:p-2 sm:p-1 mx-2 custom-link text-nowrap transition-all">
              July - December
            </a>
          </li>
          <li></li>
        </ul>


      </div>

      <div className="mob:h-[80vh] h-[60vh] py-3 my-6">
        <h2 className="text-3xl text-menu"> A yearly graph of the Salaah times in Wigan</h2> <br />

        <TimeSeriesChart data={salaahTimes} yAxisLabel="Salaah Times - Wigan" />
      </div>

    </div>
  );
};

export default TimeTable;
