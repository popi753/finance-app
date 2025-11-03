export default function formatCurrency(amount: number): string{
    const prefix = amount > 0 ? '+$' : '-$';
    return `${prefix}${Math.abs(amount).toLocaleString()}`;
}