import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

// �ڽ��� ���ϴ� ������ �̹��� ��ũ�� �������ּ���.
const PROFILE_IMAGE_LINK =
    'https://github.com/user-attachments/assets/cfbaf740-38e4-4a85-ba45-c02dad3a149e'

const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }
`

const ProfileImage: FunctionComponent = function () {
    return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
