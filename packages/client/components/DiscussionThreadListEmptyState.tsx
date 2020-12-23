import React from 'react'
import styled from '@emotion/styled'
import {PALETTE} from '~/styles/paletteV2'

const Message = styled('div')({
  border: `1px dashed ${PALETTE.BORDER_GRAY}`,
  borderRadius: 4,
  color: PALETTE.TEXT_GRAY,
  fontSize: 14,
  fontStyle: 'italic',
  lineHeight: '20px',
  margin: 'auto',
  padding: 8
})

interface Props {
  isEndedMeeting: boolean
  hasTasks: boolean
}

const DiscussionThreadListEmptyState = (props: Props) => {
  const {isEndedMeeting, hasTasks} = props
  const meetingEndedMessage = hasTasks
    ? 'No comments or tasks were added here'
    : 'No comments were added here'
  const message = hasTasks
    ? '✍️ Be the first to add a comment or task'
    : '✍️ Be the first to add a comment'
  return <Message>{isEndedMeeting ? meetingEndedMessage : message}</Message>
}

export default DiscussionThreadListEmptyState
