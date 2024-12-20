import styled from '@emotion/styled'

export const H1 = styled.div`
    font-family: Inter-SemiBold;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
`

export const H2 = styled.div`
    font-family: Inter-SemiBold;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`

export const H3 = styled.div`
    font-family: Inter-SemiBold;
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 1px;

    @media (max-width: ${(props) => props.theme.breakPoints.phone}) {
        font-size: 24px;
    }
`

export const H4 = styled.div`
    font-family: Inter-Medium;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
`

export const H5 = styled.div`
    font-family: Inter-Bold;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
`

export const H6 = styled.div`
    font-family: Inter-Regular;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
`
