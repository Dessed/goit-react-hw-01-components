import { Section, TableHeader, TableString, TableBody } from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <Section>
                    <table>
                        <thead>
                            <tr>
                            <TableHeader>Type</TableHeader>
                            <TableHeader>Amount</TableHeader>
                            <TableHeader>Currency</TableHeader>
                            </tr>
                        </thead>
                        <TableBody>
                        {items.map(item =>
                            <tr key={item.id}>
                            <TableString>{item.type}</TableString>
                            <TableString>{item.amount}</TableString>
                            <TableString>{item.currency}</TableString>
                            </tr>
                        )}
                        </TableBody>
                    </table>
        </Section>
    )
}