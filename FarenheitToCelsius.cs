using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter farenheit temperature");
            string input = Console.ReadLine();
            decimal farenheit = Convert.ToDecimal(input);

            decimal celsius = (farenheit - 32) * 5 / 9;

            Console.WriteLine(farenheit + " degrees is " + celsius + " degrees celsius");
        }
    }
}
