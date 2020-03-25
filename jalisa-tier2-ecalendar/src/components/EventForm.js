import React from 'react';
import styled from 'styled-components';

const EventForm = () => {
  return (
    <EventFormContainer>
      <form>
        <ul>
          <li>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" required />
          </li>
          <li>
            <label htmlFor="startDt">Start Date:</label>
            <input type="date" name="startDt" required />
            <label htmlFor="endDt">End Date:</label>
            <input type="date" name="endDt" required />
          </li>
          <li>
            <label htmlFor="begins">Begins:</label>
            <input type="time" name="begins" />
            <label htmlFor="ends">Ends:</label>
            <input type="time" name="ends" />
          </li>
          <li>
            <label htmlFor="people">People:</label>
            <input type="text" name="people" />
          </li>
          <li>
            <label htmlFor="location">Location:</label>
            <input type="text" name="location" />
          </li>
          <li>
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" />
          </li>
          <li>
            <AddEventButton>Add Event</AddEventButton>
          </li>
        </ul>
      </form>
    </EventFormContainer>
  );
};

export default EventForm;

const EventFormContainer = styled.div`
  display: flex;
  border-radius: 10px;

  form {
    width: 100%;
    
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
      li:last-child {
        text-align: center;
        padding-top: 30px;
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
  font-weight: 600;
`;
