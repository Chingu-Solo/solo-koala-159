import React, { useState } from 'react';
import styled from 'styled-components';

const EventForm = () => {
  return (
    <EventFormContainer>
      <form action="" method="post">
        <ul>
          <li>
            <label for="title">Title:</label>
            <input type="text" name="title" value="" />
          </li>
          <li>
            <label for="startDt">Start Date:</label>
            <input type="date" name="startDt" value="" />
            <label for="endDt">End Date:</label>
            <input type="date" name="endDt" value="" />
          </li>
          <li>
            <label for="begins">Begins:</label>
            <input type="time" name="begins" value="" />
            <label for="ends">Ends:</label>
            <input type="time" name="ends" value="" />
          </li>
          <li>
            <label for="people">People:</label>
            <input type="text" name="people" value="" />
          </li>
          <li>
            <label for="location">Location:</label>
            <input type="text" name="location" value="" />
          </li>
          <li>
            <label for="description">Description:</label>
            <input type="text" name="description" value="" />
          </li>
        </ul>
        <AddEventButton>Add Event</AddEventButton>
      </form>
    </EventFormContainer>
  );
};

export default EventForm;

const EventFormContainer = styled.div`
  display: flex;
  border-radius: 10px;

  form {
    ul {
      list-style-type: none;
      li {
        padding-top: 10px;
        label {
          padding-right: 10px;
        }
        input {
          height: 30px;
          border: none;
          border-radius: 5px;
        }

        input[type='text'] {
          width: 75%;
          height: 25px;
        }

        input[type='date'],
        input[type='time'] {
          width: 25%;
          padding-left: 10px;
          margin-right: 20px;
        }
      }
    }
  }
`;

const AddEventButton = styled.button`
  height: 40px;
  width: 180px;
  border-radius: 5px;
  color: white;
  background-color: #188665;
  font-size: 1.1em;
`;
