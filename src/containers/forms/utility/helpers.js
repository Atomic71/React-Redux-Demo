import React from 'react';
import { Icon } from '../../../components/Icon';


export const fieldValidIcon = (<Icon icon="checkmark" itemTitle="Field valid!" />)
export const fieldInvalidIcon = (<Icon icon="cross" itemTitle="Field invalid!" />)
export const giveGoodNews = (news = fieldValidIcon) => <p className="Info Success">{news}</p>
export const giveBadNews = (news = fieldInvalidIcon, error) => <p className="Info Error">{news || error}</p>